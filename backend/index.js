const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');

const connectDB = require('./connect/dbConnect');

// Load env vars
dotenv.config();

// Connect DB
connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(mongoSanitize());

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limit
app.use('/api', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));

// Routes
app.use('/api/users', require('./routes/Userroutes'));
app.use('/api/appointments', require('./routes/ Appointmentroutes'));

// Health
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server running' });
});

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled rejection:', err);
  server.close(() => process.exit(1));
});