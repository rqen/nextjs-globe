'use client'

import * as THREE from 'three'
// import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useTexture, shaderMaterial, Plane, Points } from '@react-three/drei'

const randomRange = (min, max) => Math.random() * (min * max) - min

let particlesCount = 10000
let geometry = new THREE.BufferGeometry()
let positions = new Float32Array(particlesCount * 3)
let randoms = new Float32Array(particlesCount * 3)
let sizes = new Float32Array(particlesCount)

for (let i = 0; i < particlesCount; i += 3) {
  positions[i] = (Math.random() - .5)
  positions[i + 1] = (Math.random() - .5)
  positions[i + 2] = (Math.random() - .5)

  randoms[i] = Math.random()
  randoms[i + 1] = Math.random()
  randoms[i + 2] = Math.random()

  sizes[i] = .5 + .5 * Math.random()
}

// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3))
// geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

// const plane = new THREE.Points( geometry, new THREE.PointsMaterial({ 
//   color: 0x00ff00, 
//   size: 0.02,
//   sizeAttenuation: true,
//   alphaTest: 0.5,
//   transparent: true,
//   depthWrite: false,
//   blending: THREE.AdditiveBlending,
//   vertexColors: true,
//   // map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')
// }))

const vertexShaderLiteral = /*glsl*/`
  varying vec2 vUv;
  varying vec3 vPosition;
  // varying vec3 vNormal;
  
  uniform float time;
  // uniform float progress;
  uniform sampler2D texture1;
  // uniform vec4 resolution;

  attribute vec3 aRandom;
  attribute float aSize;

  float PI = 3.141592653589793238;

  // vec3 getPos(float progress) { // Circle
  //   float angle = progress * PI * 2.;
  //   float x = cos(angle);
  //   float y = sin(angle);
  //   return vec3(x, y, 0.);
  // }

  vec3 getPos(float progress) { // Trefoil
    float angle = progress * PI * 2.;
    float x = sin(angle) + 2. * sin(2. * angle);
    float y = cos(angle) - 2. * cos(2. * angle);
    float z = -sin(3. * angle);
    // return vec3(x, y, z) * 0.5;
    return vec3(x, y, z);
  }

  vec3 getTangent(float progress) {
    float angle = progress * PI * 2.;
    float x = cos(angle) + 4. * cos(2. * angle);
    float y = -sin(angle) + 4. * sin(2. * angle);
    float z = 3. * -sin(3. * angle);
    return normalize(vec3(x, y, z));
  }

  vec3 getNormal(float progress) {
    float angle = progress * PI * 2.;
    float x = -sin(angle) - 8. * sin(2. * angle);
    float y = -cos(angle) + 8. * cos(2. * angle);
    float z = 9. * -sin(3. * angle);
    return normalize(vec3(x, y, z));
  }

  void main() {
    vec3 pos = position;
    float progress = fract(time * 0.01 + aRandom.x);
    // pos += progress;
    // pos += vec3(progress, progress * aRandom.y, progress * aRandom.z);

    pos = getPos(progress);
    vec3 normal = getNormal(progress);
    vec3 tangent = getTangent(progress);
    vec3 binormal = normalize(cross(normal, tangent));

    float radius = 0.3 + aRandom.x * 0.1;
    float cx = radius * cos(aRandom.y * PI * 2. * time * 0.1 + aRandom.z * 7.);
    // float cy = radius * sin(aRandom.y * PI * 2. * time * 0.1 + aRandom.z * PI * 2. * time * 0.1);
    float cy = radius * sin(aRandom.y * PI * 2. * time * 0.1 + aRandom.z * 7.);

    pos += (normal * cx + binormal * cy);

    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = 10. * (1. / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShaderLiteral = /* glsl */`
  varying vec2 vUv;
  varying vec3 vPosition;
  // varying vec3 vNormal;

  uniform float progress;
  uniform float time;
  uniform vec3 color;
  uniform sampler2D texture1;
  uniform vec4 resolution;

  float PI = 3.141592653589793238;

  void main() {
    vec2 st = gl_PointCoord.xy;
    float disc = length(st - vec2(0.5));
    float alpha = smoothstep(0.5, 0.48, disc);
    
    gl_FragColor = vec4(color, alpha);
  }
`;


export default function WaterCurrent () {
  let time = 0
  let color = new THREE.Color(.1, .6, .9)
  
  const shaderMat = useRef()
  const bufferGeoRef = useRef(null)

  useFrame(({clock})=>{
    // time = clock.getElapsedTime()
    shaderMat.current.uniforms.time.value = clock.getElapsedTime()
  })

  useEffect(() => {
    bufferGeoRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    bufferGeoRef.current.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3))
    bufferGeoRef.current.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
  }, [])

  return (
    <>
    <Points positions={positions} sizes={sizes} aRandom={randoms} scale={[1, .5, .5]} rotation={[0, -1, 0]}>
      {/* <bufferGeometry ref={bufferGeoRef} /> */}
      <bufferGeometry attach="geometry" ref={bufferGeoRef} />
      <shaderMaterial
         ref={shaderMat}
         args={[{
           vertexShader: vertexShaderLiteral,
           fragmentShader: fragmentShaderLiteral,
           uniforms: {
             time: {
               value: time,
             },
             color: {
               value: color
               // value: new THREE.Color(.6, .1, .1)
             }
           },
           blending: THREE.AdditiveBlending,
           transparent: true,
           depthTest: false,
           depthWrite: false,
         }]}
        //  side={THREE.DoubleSide}
       />
    </Points>
    </>
  )
  
//   return (
//   <>
//     {/* <mesh position="{[0, 0, 0]}"> */}
//     <Points positions={positions} sizes={sizes} aRandom={randoms} scale={[1, 1, 1]}>
//     {/* <Points args={[{aRandom: randoms}]} positions={positions} sizes={sizes} scale={[1, 1, 1]}> */}
//     {/* <Points args={[geometry]} scale={[1, 1, 1]}> */}
//       {/* <pointsMaterial color="green" /> */}
//       <shaderMaterial
//         ref={shaderMat}
//         args={[{
//           vertexShader: vertexShaderLiteral,
//           fragmentShader: fragmentShaderLiteral,
//           uniforms: {
//             time: {
//               value: time,
//             },
//             color: {
//               value: color
//               // value: new THREE.Color(.6, .1, .1)
//             }
//           },
//           blending: THREE.AdditiveBlending,
//           transparent: true,
//           depthTest: false,
//           depthWrite: false,
//         }]}
//         // side={THREE.DoubleSide}
//       />
//     </Points>
//   </>
//  )
}