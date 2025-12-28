require('dotenv').config();
const express = require('express');
const cors = require('cors');
const roomsRoutes = require('./src/routes/rooms');
const authRoutes = require('./src/routes/authRouter');
const userRoutes = require('./src/routes/userRouter');
const reservationRoutes = require('./src/routes/reservationRouter');

const app = express();
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());


app.use('/rooms', roomsRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/reservations', reservationRoutes);







const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo http://localhost:${PORT}`);
});
