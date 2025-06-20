const express = require('express');
const cors = require('cors');
const roomsRoutes = require('./src/routes/rooms');
const authRoutes = require('./src/routes/authRouter');

const app = express();
app.use(cors(
  {
    origin: 'http://localhost:5173', 
    credentials: true,
  }
));
app.use(express.json());


app.use('/rooms', roomsRoutes);
app.use('/auth', authRoutes);







const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo http://localhost:${PORT}`);
});
