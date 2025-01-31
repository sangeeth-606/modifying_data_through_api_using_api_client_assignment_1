import express from 'express';
import { resolve } from 'path';
import connectDb from './db.js';
import router from './Routes/menuroutes.js';

const app = express();
const port = 3010;
connectDb();

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/api', router);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
