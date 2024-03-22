'use client'

import { React, useRef, useEffect, Suspense } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { 
  OrbitControls, 
  useTexture, 
  Sphere,
  Text3D,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture
 } from '@react-three/drei'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { Mesh } from 'three'
// import Image from 'next/image'

// import Globe from './Globe.jsx'
// import GlobeAtmosphere from './GlobeAtmosphere.jsx'

// import Brain from './Brain.jsx'

import WaterCurrent from './WaterCurrent.jsx'

import useMousePosition from '/src/hooks/useMousePosition.jsx'

// import '/src/app/css/components/gl-scene.module.css'


function TheScene() {
  // const mouse = useRef({})
  // let mouse = {}
  const mouse = useMousePosition({includeTouch: false, normalize: true})
  // const [matcapTexture] = useMatcapTexture('CB4E88_F99AD6_F384C3_ED75B9')
  // const textRef = useRef()

  // useFrame(({state}) => {
  //   state.camera.lookAt(0, 0, 0);
  // })

  useThree(({camera}) => {
    // camera.position.y = 8;
    camera.lookAt(0, 0, 0);
    // camera.updateProjectionMatrix();
    // camera.updateMatrixWorld();
    // camera.updateWorldMatrix();
    // camera.updateMatrix();
    // camera.rotateY(0.1);
  })

  // useFrame(({state}) => {
  //   state.camera.lookAt(0, 0, 0);
  // })

  // console.log(mouse)

  // const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <>
      <ambientLight />
      <pointLight position={[3, 3, 3]} />

      <WaterCurrent />
      
      {/* <Brain /> */}
      {/* <Globe position={[-10, 0, 0]} rotateX={-10} mousePosition={mouse} /> */}
      {/* <GlobeAtmosphere position={[0, 0, 0]} /> */}
      {/* <Center> */}
        {/* <Text3D
          position={[-9, 4, -10]}
          rotateX={0}
          scale={[1, 1, 1]}
          ref={textRef}
          size={w / 9}
          // maxWidth={[-w / 5, -h * 2, 3]}
          font={"/fonts/font-wondering-notes-regular-reverse.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          {`rqen.com \n Christian Røen`}
          <meshMatcapMaterial color="white" matcap={matcapTexture} />
          {/* <meshBasicMaterial color={0xffffff} /> * /}
        </Text3D> */}
      {/* </Center> */}
      
    </>
  )
}

export default function Scene() {
  return (
    <>
      <Canvas camera={{position: [0,0,1]}} className='h-2xl w-2xl'>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <Stars
            position={[0, 0, 0]}
            radius={100}
            depth={10}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
          <Sparkles
            position={[0, 0, 0]}
            count={200}
            size={20}
            speed={0.02}
            opacity={1}
            scale={100}
            color="#fff3b0"
          /> */}
          <TheScene />
        </Suspense>
      </Canvas>
    </>
  )
}