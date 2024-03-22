'use client'

import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { shaderMaterial, Sphere } from '@react-three/drei'

export default function GlobeAtmosphere() {
  
  const sphere = useRef()
  // useFrame(() => {
  //   sphere.current.rotation.y += 0.0011
  // })

  const vertexShader = `
    varying vec3 vNormal;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;

    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
    }
  `;

  return (
    <Sphere position={[0, 0, 0]} args={[2.2, 50, 50]}>
      <shaderMaterial
        args={[{
          vertexShader,
          fragmentShader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        }]}
        // side={THREE.DoubleSide}
      />
      
    </Sphere>
  )
}
 


// {/* <shaderMaterial
//         args={[{
//           vertexShader,
//           fragmentShader,
//           uniforms: {
//             globeTexture: {value: earthUvMap}
//           }
//         }]}
//         // side={THREE.DoubleSide}
//       /> */}
