import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import config from './config';

const app = express();
const { PORT, MONGO_URI } = config;

app.use(hpp());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connection Success'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Success');
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port: %d', port);
});

export default app;
