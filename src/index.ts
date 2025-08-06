import { Elysia } from 'elysia';

const app = new Elysia()
  .post('/test', async ({ params, body, set}) => {



    const data = (body as any).data;

    if (!data || (body as any).data.trim().length === 0) {
      set.status = 400;
      return { error: "No data provided for validation" };
    }

    // Calculate size of body.data in bytes
    const dataSize = Buffer.byteLength(JSON.stringify(data));
    //const bodySize = Buffer.byteLength(JSON.stringify(body));

    return {
      dataSize: dataSize,
//      bodySize: dataSize,
      unit: 'bytes'
//      req: JSON.stringify(body)
    };
  })
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
