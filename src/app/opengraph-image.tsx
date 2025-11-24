import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Putu Astika - Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #050505, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '40px 80px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.03)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          }}
        >
          <div
             style={{
               fontSize: 80,
               fontWeight: 'bold',
               background: 'linear-gradient(to bottom, #ffffff, #a1a1aa)',
               backgroundClip: 'text',
               color: 'transparent',
               marginBottom: 20,
             }}
          >
            Putu Astika
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              letterSpacing: '-0.02em',
            }}
          >
            Full Stack Developer
          </div>
          <div
             style={{
               marginTop: 40,
               display: 'flex',
               alignItems: 'center',
               gap: 10,
             }}
          >
             <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
             <div style={{ fontSize: 20, color: '#d4d4d8' }}>Available for Hire</div>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
