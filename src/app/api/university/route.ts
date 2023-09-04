import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  return [
    {
      name: 'Taylor University, Lakeside',
    },
    {
      name: 'Asia Pacific University',
    },
    {
      name: 'University of Nottingham Malaysia',
    },
  ](request);
}
