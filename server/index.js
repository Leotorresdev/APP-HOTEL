const express = require('express');
const cors = require('cors');
const roomsRoutes = require('./src/routes/rooms');
const authRoutes = require('./src/routes/authRouter');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/rooms', roomsRoutes);
app.use('/auth', authRoutes);







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo http://localhost:${PORT}`);
});
