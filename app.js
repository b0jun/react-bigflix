import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import authRoutes from './routes/api/auth';
import mylistRoutes from './routes/api/mylist';
import config from './config';

const app = express();
const { PORT, MONGO_URI } = config;
const prod = process.env.NODE_ENV === 'production';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (prod) {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
} else {
  app.use(morgan('dev'));
}

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connection Success'))
  .catch((e) => console.log(e));

app.use('/api/auth', authRoutes);
app.use('/api/mylist', mylistRoutes);

if (prod) {
  app.use(express.static(path.join(__dirname, './front/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './front/build', 'index.html'));
  });
}

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port: %d', port);
});

export default app;
