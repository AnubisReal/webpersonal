import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), "public", "data.json");
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
