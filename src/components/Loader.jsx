import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="canvas-load" style={{ textAlign: 'center' }}>
        {/* Optionally add an image or other element for a visual loader */}
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f1f1f1',
          borderTop: '5px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto',
        }} />
      </div>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
          textAlign: 'center',
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
