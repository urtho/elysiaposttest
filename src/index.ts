import { Elysia } from 'elysia';

const app = new Elysia()
  .post('/test', async ({ body, request }) => {
    // Calculate body size in bytes
    const bodySize = Buffer.byteLength(JSON.stringify(body));
    
    return {
      bodySize: bodySize,
      unit: 'bytes'
    };
  })
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
