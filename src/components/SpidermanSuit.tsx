"use client";

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';

interface SpidermanModelProps {
  modelPath: string;
  rotationY: number;
}

function SpidermanModel({ modelPath, rotationY }: SpidermanModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={[0.05, -0.9, 3.5]} rotation={[0, rotationY, 0]} />;
}

interface SpidermanSuitProps {
  modelPath: string;
}

const SpidermanSuit: React.FC<SpidermanSuitProps> = ({ modelPath }) => {
  const [rotationY, setRotationY] = useState(0);

  const handleRotationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRotationY(parseFloat(event.target.value));
  };

  return (
    <div className="relative w-full h-full">
      <Canvas className="w-full h-full">
        <Suspense fallback={<Html><div className="loading-circle"></div></Html>}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1.2} position={[5, 5, 5]} />
          <directionalLight intensity={0.5} position={[-5, -5, -5]} />
          <SpidermanModel modelPath={modelPath} rotationY={rotationY} />
          <OrbitControls rotateSpeed={0.1} panSpeed={0.1} zoomSpeed={0.1} keyPanSpeed={0.1}/>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-transparent p-2 rounded shadow">
        <div className="block mb-2">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="#f4f4f4" version="1.1" id="Layer_1" viewBox="0 0 480 480" className="w-12 h-12">
            <g>
              <g>
                <path d="M391.502,210.725c-5.311-1.52-10.846,1.555-12.364,6.865c-1.519,5.31,1.555,10.846,6.864,12.364     C431.646,243.008,460,261.942,460,279.367c0,12.752-15.51,26.749-42.552,38.402c-29.752,12.82-71.958,22.2-118.891,26.425     l-40.963-0.555c-0.047,0-0.093-0.001-0.139-0.001c-5.46,0-9.922,4.389-9.996,9.865c-0.075,5.522,4.342,10.06,9.863,10.134     l41.479,0.562c0.046,0,0.091,0.001,0.136,0.001c0.297,0,0.593-0.013,0.888-0.039c49.196-4.386,93.779-14.339,125.538-28.024     C470.521,316.676,480,294.524,480,279.367C480,251.424,448.57,227.046,391.502,210.725z"/>
                <path d="M96.879,199.333c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10H138v41.333H96.879c-5.522,0-10,4.477-10,10     s4.478,10,10,10H148c5.523,0,10-4.477,10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522,0-10,4.477-10,10s4.478,10,10,10H138     v41.333H96.879z"/>
                <path d="M188.879,280.667h61.334c5.522,0,10-4.477,10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523,0,10-4.477,10-10     s-4.477-10-10-10h-51.121c-5.523,0-10,4.477-10,10v122.667C178.879,276.19,183.356,280.667,188.879,280.667z M198.879,219.333     h41.334v41.333h-41.334V219.333z"/>
                <path d="M291.121,280.667h61.334c5.522,0,10-4.477,10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522,0-10,4.477-10,10v122.667     C281.121,276.19,285.599,280.667,291.121,280.667z M301.121,158h41.334v102.667h-41.334V158z"/>
                <path d="M182.857,305.537c-3.567-4.216-9.877-4.743-14.093-1.176c-4.217,3.567-4.743,9.876-1.177,14.093l22.366,26.44     c-47.196-3.599-89.941-12.249-121.37-24.65C37.708,308.06,20,293.162,20,279.367c0-16.018,23.736-33.28,63.493-46.176     c5.254-1.704,8.131-7.344,6.427-12.598c-1.703-5.253-7.345-8.13-12.597-6.427c-23.129,7.502-41.47,16.427-54.515,26.526     C7.674,252.412,0,265.423,0,279.367c0,23.104,21.178,43.671,61.242,59.48c32.564,12.849,76.227,21.869,124.226,25.758     l-19.944,22.104c-3.7,4.1-3.376,10.424,0.725,14.123c1.912,1.726,4.308,2.576,6.696,2.576c2.731,0,5.453-1.113,7.427-3.301     l36.387-40.325c1.658-1.837,2.576-4.224,2.576-6.699v-0.764c0-2.365-0.838-4.653-2.365-6.458L182.857,305.537z"/>
                <path d="M381.414,137.486h40.879c5.522,0,10-4.477,10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522,0-10,4.477-10,10v40.894     C371.414,133.009,375.892,137.486,381.414,137.486z M391.414,96.592h20.879v20.894h-20.879V96.592z"/>
              </g>
            </g>
          </svg>
        </div>
        <input
          type="range"
          min={0}
          max={Math.PI * 2}
          step={0.01}
          value={rotationY}
          onChange={handleRotationChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SpidermanSuit;
