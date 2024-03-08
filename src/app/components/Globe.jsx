'use client'

import * as THREE from "three"
import { useRef } from "react"
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei"

import { TextureLoader } from 'three/src/loaders/TextureLoader'


// const newUvMap = new THREE.TextureLoader().load('./img/earth-uv-map.jpg')

// console.log('earthUvMap: ', earthUvMap)
// console.log('newUvMap: ', newUvMap)


export default function Globe() {
  const earthUvMap = useLoader(TextureLoader, './img/earth-uv-map.jpg')
  const sphere = useRef()
  useFrame(() => {
    sphere.current.rotation.y += 0.0011
  })

  const vertexShader = `
    varying vec2 vUV;
    varying vec3 vNormal;

    void main() {
      vUV = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUV;
    varying vec3 vNormal;

    uniform sampler2D globeTexture;

    void main() {
      // float intensity = 1.05 - dot(vNormal, vec3(1.0, 1.0, 0.0));
      float intensity = 1.95 - dot(vNormal, vec3(0.0, 0.0, 1.0));

      vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
      // vec3 atmosphere = vec3(1., 0., 0.) * pow(intensity, 0.5);

      gl_FragColor = vec4(atmosphere * texture2D(globeTexture, vUV).xyz, 1.0);
      // gl_FragColor = vec4(texture2D(globeTexture, vUV).xyz, 1.0);

      // gl_FragColor = vec4(0.9, 1.0, 1.0, 1.0);
    }
  `;

  return (
    <mesh ref={sphere}>
      <sphereGeometry args={[1, 200]} />
      <shaderMaterial
        args={[{
          vertexShader,
          fragmentShader,
          uniforms: {
            globeTexture: {
              value: earthUvMap
              // value: new THREE.TextureLoader().load('./img/earth-uv-map.jpg')
            }
          }
        }]}
        side={THREE.DoubleSide}
      />
      
    </mesh>
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
