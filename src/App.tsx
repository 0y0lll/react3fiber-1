import { useEffect, useRef } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'

function MyBox() {
	const box = useRef<Mesh>(null)

	useEffect(() => {
		if (box.current) {
			gsap.to(box.current.position, {
				duration: 1,
				// y: 2,
			})
		}
	}, [box])

	useFrame((state, delta) => {
		// if (box.current) {
		// 	gsap.to(box.current.rotation, {
		// 		y: state.clock.elapsedTime,
		// 	})
		// }
	})

	return (
		<mesh
			ref={box}
			// position={[Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5]}
			position={[0, 0, 0]}
		>
			<meshStandardMaterial attach="material" color="white" />
			<boxGeometry attach="geometry" />
		</mesh>
	)
}

function App() {
	return (
		<>
			<Canvas
				style={{ width: '100vw', height: '100vh' }}
				camera={{
					aspect: window.innerWidth / window.innerHeight,
					fov: 100,
					near: 0.1,
					far: 1000,
					position: [2, 2, 2],
				}}
			>
				<color attach="background" args={['gray']} />
				{/* <fog attach={'fog'} args={['black', 0, 7]} /> */}

				<directionalLight
					color={'white'}
					position={[5, 5, 5]}
					intensity={10}
				/>
				<MyBox />
			</Canvas>
		</>
	)
}

export default App
