import express from 'express';
import cors from 'cors';
import deviceRoutes from './api/routes/devices';
import manufacturerRoutes from './api/routes/manufacturers';
import protocolRoutes from './api/routes/protocols';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/devices', deviceRoutes);
app.use('/api/manufacturers', manufacturerRoutes);
app.use('/api/protocols', protocolRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'LIS Interface API',
    version: '1.0.0',
    endpoints: {
      devices: '/api/devices',
      manufacturers: '/api/manufacturers',
      protocols: '/api/protocols',
      health: '/health'
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

export default app;
