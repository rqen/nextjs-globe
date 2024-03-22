'use client'

import * as THREE from 'three'
// import gsap from 'gsap'
import { useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useTexture, shaderMaterial } from '@react-three/drei'

const randomRange = (min, max) => Math.random() * (min * max) - min
let curves = []

for (let i = 0; i < 99; i++) {
  let points = []
  let length = randomRange(.5, .9)
  
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        .9,
        Math.PI - (j / 100) * Math.PI * 2 * length,
        (i / 100) * Math.PI * 2
      )
    )
  }
  // console.log('points: ', points)
  // points.shift() // remove first point as it seems malformed for some odd reason
  let tmpCurve = new THREE.CatmullRomCurve3(points)
  curves.push(tmpCurve)
}

curves.shift()

console.log('curves: ', curves);

function Tube ({ curve }) {
  const shaderMat = useRef()
  let time
  let color = new THREE.Color(.1, .6, .9)

  useFrame(({clock})=>{
    shaderMat.current.uniforms.time.value = clock.getElapsedTime()
  })

  const vertexShader = `
    varying vec2 vUV;
    varying vec3 vNormal;
    varying float vProgress;
    
    uniform float time;

    void main() {
      vUV = uv;
      vNormal = normalize(normalMatrix * normal);
      vProgress = smoothstep(-1., 1., sin(vUV.x * 12. + time * 3.));

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUV;
    varying vec3 vNormal;
    varying float vProgress;

    // uniform sampler2D globeTexture;
    uniform float time;
    uniform vec3 color;

    void main() {
      float hideCorners = smoothstep(1., .9, vUV.x) * smoothstep(0., .1, vUV.x);
      vec3 finalColor = mix(color, color * .25, vProgress);

      gl_FragColor.rgba = vec4(finalColor, hideCorners);
    }
  `;
  
  return (
  <>
    {/* <mesh position="{[0, 0, 0]}"> */}
    <mesh scale={[10, 4, 10]}>
      <tubeGeometry args={[curve, 64, 0.001, 2, false]} />
      {/* <sphereGeometry args={[1.5, 50, 50]} /> */}
      {/* <meshStandardMaterial color="white" /> */}
      <shaderMaterial
        ref={shaderMat}
        args={[{
          vertexShader,
          fragmentShader,
          uniforms: {
            time: {
              value: 0,
            },
            color: {
              value: color
            }
          },
          blending: THREE.AdditiveBlending,
          transparent: true,
          depthTest: false,
          depthWrite: false,
        }]}
        // side={THREE.DoubleSide}
      />
    </mesh>
  </>
 )
}

function Tubes () {
  return (
    <>
      {/* <Tube /> */}
      {curves.map((curve, index)=>{
        // console.log('curve: ', curve)
        return (
          <Tube curve={curve} key={index} />
        )
      })}
    </>
  )
}


export default function Brain() {
  
  // const sphere = useRef()
  // useFrame(() => {
    // sphere.current.rotation.y += 0.0011
  // })

  return (
    <>
      <Tubes />
    </>
  )
}

