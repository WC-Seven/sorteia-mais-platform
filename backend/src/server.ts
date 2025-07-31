import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar Prisma
const prisma = new PrismaClient();

// Criar app Express
const app = express();

// Configurações de segurança
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true,
}));

// Middleware de parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: '1.0.0'
    });
});

// API Routes (serão adicionadas aqui)
app.get('/api', (req, res) => {
    res.json({
        message: '🎯 Sorteia+ API v1.0.0',
        status: 'running',
        endpoints: {
            auth: '/api/auth',
            rifas: '/api/rifas',
            vaquinhas: '/api/vaquinhas',
            sorteios: '/api/sorteios',
            payments: '/api/payments'
        }
    });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Route ${req.originalUrl} not found`
    });
});

// Função para iniciar o servidor
const startServer = async () => {
    try {
        // Testar conexão com banco
        await prisma.$connect();
        console.log('✅ Database connected successfully');

        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`🚀 Sorteia+ Backend running on port ${port}`);
            console.log(`📊 Environment: ${process.env.NODE_ENV}`);
            console.log(`🔗 Health check: http://localhost:${port}/health`);
            console.log(`📚 API docs: http://localhost:${port}/api`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('🛑 SIGTERM received, shutting down gracefully');
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('🛑 SIGINT received, shutting down gracefully');
    await prisma.$disconnect();
    process.exit(0);
});

// Iniciar servidor
startServer(); 