'use client'

import { Suspense } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useTexture } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import { Mesh } from "three"
// import Image from "next/image"
import Globe from "./Globe.jsx"

function TheScene() {
  return (
    <>
      <Globe />
      <ambientLight />
      <pointLight position={[3, 3, 3]} />
    </>
  )
}

export default function Scene() {
  return (
    <>
      <Canvas className='h-2xl w-2xl'>
        <Suspense fallback={null}>
          <OrbitControls />
          <TheScene />
        </Suspense>
      </Canvas>
    </>
  )
}