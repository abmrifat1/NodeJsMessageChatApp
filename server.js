import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import * as messagesController from './message.controller';
import { isAuthenticatedMiddleware, jwtAuthenticationMiddleware, jwtLogin } from './jwt-authentication';

const app = express();

app.use(bodyParser.json());
app.use(jwtAuthenticationMiddleware);

app.post('/jwt-login', jwtLogin);
app.get('/messages', isAuthenticatedMiddleware, messagesController.getAll);
app.post('/messages', isAuthenticatedMiddleware, messagesController.post);

const port = 3000;
app.listen(port, () => console.log(`Authentication example app listening on port ${port}!`));