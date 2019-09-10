import 'reflect-metadata';
import express from 'express';

const app = express();

app.get('/', function(request, response) {
  console.log('Hello World!');
});

console.log('Server listening on port: 8080...');
app.listen(8080);
