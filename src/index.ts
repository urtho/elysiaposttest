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
    const bodySize = Buffer.byteLength(JSON.stringify(body));

    return {
      dataSize: dataSize,
      bodySize: dataSize,
      unit: 'bytes',
      req: JSON.stringify(body)
    };
  })
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
