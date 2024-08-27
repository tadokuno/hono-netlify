// netlify/functions/app.js

import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono on Netlify!');
});

app.get('/hello', (c) => {
  return c.json({ message: 'Hello, World!' });
});

// Honoアプリケーションをエクスポート
export const handler = app.fetch;

