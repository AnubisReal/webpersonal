import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Ruta al archivo data.json en public
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    
    // Guardar los datos
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
