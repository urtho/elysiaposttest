import { Elysia } from 'elysia';

const app = new Elysia()
  .post('/test', async ({ body, request }) => {
    const data = (body as any).data;
    if (!data) {
      return {
        error: 'No data property in body'
      };
    }

    // Calculate size of body.data in bytes
    const dataSize = Buffer.byteLength(JSON.stringify(data));

    return {
      dataSize: dataSize,
      unit: 'bytes'
    };
  })
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
