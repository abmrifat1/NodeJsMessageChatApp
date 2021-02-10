import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as messagesController from './message.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/messages', messagesController.getAll);
app.post('/messages', messagesController.post);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Authentication example app listening on port ${PORT}!`));