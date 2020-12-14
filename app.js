import express from 'express';
import config from './config';

const app = express();
const { PORT } = config;

app.get('/', (req, res) => {
  res.send('Success');
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port: %d', port);
});

export default app;
