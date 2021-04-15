const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const db = require('./config/db/index');
db.connect();

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) =>
  res.send('Hello World!!')
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listen at port: http://localhost:${PORT}`));
