'use client'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls, Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import * as THREE from 'three'

extend({ UnrealBloomPass })

function ParticleScene() {
  const meshRef = useRef(null)
  const count = 20000
  const speedMult = 1
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const target = useMemo(() => new THREE.Vector3(), [])
  const color = useMemo(() => new THREE.Color(), [])

  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i += 1) {
      pos.push(new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100))
    }
    return pos
  }, [])

  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true, toneMapped: false }),
    []
  )
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.13), [])

  const PARAMS = useMemo(
    () => ({ radius: 80, height: 300, twist: 0.639, capsule: 1.97, turbulence: 3.28, pulse: 1.189 }),
    []
  )
  const addControl = (id, l, min, max, val) => PARAMS[id] !== undefined ? PARAMS[id] : val

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime() * speedMult

    for (let i = 0; i < count; i += 1) {
      const radius = addControl('radius', 'DNA Radius', 10, 80, 30)
      const height = addControl('height', 'DNA Height', 50, 300, 180)
      const twist = addControl('twist', 'Twist Speed', 0.1, 5.0, 1.3)
      const capsuleScale = addControl('capsule', 'Capsule Scale', 0.5, 4.0, 1.4)
      const turbulence = addControl('turbulence', 'Molecular Turbulence', 0.0, 8.0, 2.0)
      const pulseSpeed = addControl('pulse', 'Energy Flow', 0.1, 10.0, 3.5)

      const ratio = i / count
      const capsuleParticles = 160.0
      const capsuleId = Math.floor(i / capsuleParticles)
      const localIndex = i % capsuleParticles
      const localRatio = localIndex / capsuleParticles

      const helixAngle = capsuleId * 0.22 + time * twist
      const helixY = (ratio - 0.5) * height
      const helixX = Math.cos(helixAngle) * radius
      const helixZ = Math.sin(helixAngle) * radius

      const capsuleLength = 12.0 * capsuleScale
      const capsuleRadius = 4.0 * capsuleScale

      let px = 0.0
      let py = 0.0
      let pz = 0.0

      if (localRatio < 0.25) {
        const t = localRatio / 0.25
        const phi = t * Math.PI
        px = -capsuleLength * 0.5
        py = Math.cos(phi) * capsuleRadius
        pz = Math.sin(phi) * capsuleRadius
      } else if (localRatio < 0.75) {
        const t = (localRatio - 0.25) / 0.5
        const theta = t * Math.PI * 2.0
        px = (t - 0.5) * capsuleLength
        py = Math.cos(theta) * capsuleRadius
        pz = Math.sin(theta) * capsuleRadius
      } else {
        const t = (localRatio - 0.75) / 0.25
        const phi = t * Math.PI
        px = capsuleLength * 0.5
        py = Math.cos(phi) * capsuleRadius
        pz = Math.sin(phi) * capsuleRadius
      }

      const dirX = Math.cos(helixAngle)
      const dirZ = Math.sin(helixAngle)
      const turbulenceWave = Math.sin(localRatio * 40.0 + time * 3.0 + helixAngle * 5.0) * turbulence
      const pulse = Math.sin(ratio * 80.0 - time * pulseSpeed * 6.0) * 0.5 + 0.5
      const x = helixX + dirX * px - dirZ * py + turbulenceWave
      const y = helixY + pz + Math.sin(time + ratio * 20.0) * pulse * 2.0
      const z = helixZ + dirZ * px + dirX * py + turbulenceWave

      target.set(x, y, z)

      const isBlueSide = px < 0.0
      const hue = isBlueSide ? 0.55 : 0.33
      const saturation = 0.9
      const lightness = 0.45 + pulse * 0.35 + Math.sin(localRatio * 30.0 + time * 4.0) * 0.05

      color.setHSL(hue, saturation, lightness)
      positions[i].lerp(target, 0.1)
      dummy.position.copy(positions[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      meshRef.current.setColorAt(i, color)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  })

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />
}

const ParticleSwarm = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 60 }} style={{ width: '100%', height: '100%' }}>
      <fog attach="fog" args={['#040816', 10, 220]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 10, 15]} intensity={0.35} />
      <ParticleScene />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
      <Effects disableGamma>
        <unrealBloomPass threshold={0} strength={1.5} radius={0.4} />
      </Effects>
    </Canvas>
  )
}

export default ParticleSwarm
