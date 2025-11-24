import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px', // Slightly rounded corners
        }}
      >
        <div
          style={{
            fontFamily: 'serif', // Using serif for a "cool"/premium look
            fontWeight: 900,
            fontStyle: 'italic',
            marginTop: '-2px', // Slight adjustment for optical centering
            background: 'linear-gradient(to bottom right, #ffffff, #a1a1aa)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          ast
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
