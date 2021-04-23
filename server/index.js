import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = process.env.PORT || 3000;
const serverId = uuidv4();

app.get('/hello', (req, res) => {
  res.send({
    message: 'Hello World!!',
    serverId: serverId,
  });
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
