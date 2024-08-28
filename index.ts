import express, { type Express } from 'express';

import { registerRouter } from './src/routes';
import swaggerDocs from "./src/utils/swagger";

const app: Express = express();

app.disable('x-powered-by');
app.use(express.json());

registerRouter(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  swaggerDocs(app, port as number);
  console.log(`Server is up and running on port ${port}`);
});