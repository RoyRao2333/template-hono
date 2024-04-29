import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/', (context) => {
  return context.json({ message: 'Hello Hono!' });
});

export default handle(app);
