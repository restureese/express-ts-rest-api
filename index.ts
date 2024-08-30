import express, { type Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { registerRouter } from './src/routes';
import swaggerDocs from "./src/utils/swagger";

const app: Express = express();

app.disable('x-powered-by');
app.disable('etag');
app.use(express.json());
app.use(morgan('short'));
app.use(cors())

registerRouter(app);

const port = process.env.PORT || 8000;

app.listen(port as number, '0.0.0.0', () => {
  swaggerDocs(app, port as number);
  console.log(`Server is up and running on port ${port}`);
});