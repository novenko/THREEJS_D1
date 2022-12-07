/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MartianDays (https://sketchfab.com/MartianDays)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/spacex-starship-a8a0b69f776841a1a465cd9fb3762fd2
title: SpaceX Starship
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const starRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        starRef.current.rotation.y = elapsedTime / 5;
      });
  return (
    <group ref={starRef} {...props} dispose={null}>
      <group position={[0, -5293.18, -42.38]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[0, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Bow_Window001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group rotation={[0, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Primary_Hull001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group rotation={[0, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Cargo_Doors001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group position={[0, 0, 123.11]} rotation={[0, 0, Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
            <mesh geometry={nodes.SeaLev_Raptors_LP001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
            <mesh geometry={nodes.Vacuum_Raptors_LP001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group position={[-1.13, -0.26, 0]} rotation={[0, 0, -Math.PI / 6]} scale={100}>
            <mesh geometry={nodes.Cargo_DropBoxes001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group rotation={[0, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Cabin_WindowInset001_Starship_0.geometry} material={materials.Starship} />
          </group>
          <group rotation={[0, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Cabin_Windows001_Starship_0.geometry} material={materials.Starship} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')