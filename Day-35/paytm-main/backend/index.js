const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();
const mainRouter = require('./routes/index');
app.use(cors());
app.use(express.json());
app.use('/api/v1', mainRouter);

app.listen(PORT, () => console.log(`running on: ${PORT}`));
