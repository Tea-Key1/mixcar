"use client"

import { Environment, OrbitControls, useTexture, useHelper, ContactShadows } from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { Fragment, useRef, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import * as THREE from "three"
import * as YUKA from "yuka"

export default function Experience() {
    const { scene, viewport, camera } = useThree()

    const width = viewport.width;
    const height = viewport.height;
    const aspectRatio = width / height

    const level = useLoader(GLTFLoader, "/models/upbge-sample-level-01.glb")
    const navMesh = useLoader(GLTFLoader, "/models/upbge-sample-level-01-navmesh.glb")
    const car = useLoader(GLTFLoader, "/models/car_sample_02.glb", loader => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath("/draco/")
        loader.setDRACOLoader(dracoLoader)
    })

    const bakedTexture = useTexture("/models/bakedTexture.jpg")
    bakedTexture.flipY = false
    bakedTexture.colorSpace = THREE.SRGBColorSpace

    const meshRef = useRef<THREE.Mesh | null>(null);
    const groupRef = useRef<THREE.Group | null>(null);
    const targetRef = useRef<THREE.Mesh | null>(null);

    const spotLRef = useRef<THREE.SpotLight>(new THREE.SpotLight("#005F00", 1));
    const spotRRef = useRef<THREE.SpotLight>(new THREE.SpotLight("#005F00", 1));
    const pointRef: any = useRef<THREE.Object3D>(new THREE.Object3D());
    const wheel_LRef = useRef<THREE.Mesh | null>(null);
    const wheel_RRef = useRef<THREE.Mesh | null>(null);

    // useHelper(spotLRef, THREE.SpotLightHelper, "#ff0000");
    // useHelper(spotRRef, THREE.SpotLightHelper, "#00ff00");

    useEffect(() => {
        // pointRefが変更されたときに実行されるコード
        vehicle.setRenderComponent(groupRef.current, (entity: YUKA.GameEntity, renderComponent) => {
            renderComponent?.matrix.copy(entity.worldMatrix as any)
        })
        target.setRenderComponent(targetRef.current, (entity: YUKA.GameEntity, renderComponent) => {
            renderComponent?.matrix.copy(entity.worldMatrix as any)
        })
        spotLRef.current.target = pointRef.current;
        spotRRef.current.target = pointRef.current;
        
    }, [groupRef.current]);

    const vehicle = new YUKA.Vehicle();
    const target = new YUKA.GameEntity()


    vehicle.setRenderComponent(groupRef.current, (entity: YUKA.GameEntity, renderComponent) => {
        renderComponent?.matrix.copy(entity.worldMatrix as any)
    })
    target.setRenderComponent(targetRef.current, (entity: YUKA.GameEntity, renderComponent) => {
        renderComponent?.matrix.copy(entity.worldMatrix as any)
    })


    const entityManager = new YUKA.EntityManager();
    entityManager.add(vehicle);
    entityManager.add(target)

    const arriveBehavior = new YUKA.ArriveBehavior(target.position, 2, 3);
    vehicle.steering.add(arriveBehavior)

    vehicle.maxSpeed = 20
    vehicle.scale.set(0.5, 0.5, 0.5)
    vehicle.position.set(3, 0, -3)

    useFrame((state, delta: number) => {
        const vx: number = (state.mouse.x * width / 2)
        const vy: number = (-state.mouse.y * height / 2) * 1.3

        const gx: number = (vx * Math.cos(-45 * Math.PI / 180)) - (vy * Math.sin(-45 * Math.PI / 180))
        const gy: number = (vx * Math.sin(-45 * Math.PI / 180)) + (vy * Math.cos(-45 * Math.PI / 180))

        wheel_LRef.current?.lookAt(vx, 0, vy)
        wheel_RRef.current?.lookAt(vx, 0, vy)

        target.position.set(vx, 0, vy)
        entityManager.update(delta)
    })


    return (<Fragment>

        <group>
            <group ref={groupRef} matrixAutoUpdate={false}>
                {car.scene.children.map((child: any, index: number) => {
                    if (child.name == "frame") {
                        return <mesh key={index} geometry={child.geometry} castShadow receiveShadow>
                            <meshStandardMaterial color={"cyan"} />
                        </mesh>
                    }
                    if (child.name == "wheel_fl") {
                        return (
                            <mesh ref={wheel_LRef} key={index} geometry={child.geometry} position={[0.72, 0.32, 1.59]}>
                                <meshStandardMaterial map={bakedTexture} />
                            </mesh>
                        )
                    }
                    if (child.name == "wheel_fr") {
                        return (
                            <mesh ref={wheel_RRef} key={index} geometry={child.geometry} position={[-0.71, 0.32, 1.6]}>
                                <meshStandardMaterial map={bakedTexture} />
                            </mesh>
                        )
                    }
                    if (child.name == "door") {
                        return <mesh key={index} geometry={child.geometry} castShadow receiveShadow>
                            <meshStandardMaterial color={"cyan"} />
                        </mesh>
                    }
                    if (child.name == "window") {
                        return <mesh key={index} geometry={child.geometry} castShadow receiveShadow>
                            <meshStandardMaterial color={"white"} transparent opacity={0.1} metalness={0.5} />
                        </mesh>
                    }
                    if (child.name == "light") {
                        return (
                            <group key={index}>
                                <mesh key={"light"} geometry={child.geometry} castShadow receiveShadow >
                                    <meshStandardMaterial color={"white"} />
                                </mesh>
                                <spotLight key={"spotLLight"} color={"#005F00"} intensity={50} ref={spotLRef} castShadow angle={0.5} distance={5} position={[0.4, 1, 2.5]} />
                                <spotLight key={"spotRLight"} color={"#005F00"} intensity={50} ref={spotRRef} castShadow angle={0.5} distance={5} position={[-0.4, 1, 2.5]} />
                            </group>)
                    }
                    return <mesh key={index} geometry={child.geometry} castShadow receiveShadow>
                        <meshStandardMaterial map={bakedTexture} />
                    </mesh>
                }
                )}
                <mesh ref={pointRef} position={[0, 0, 5]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial transparent opacity={0} />
                </mesh>
            </group>


            <mesh ref={targetRef} matrixAutoUpdate={false}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial transparent opacity={0} />
            </mesh>
        </group>

        {/* <mesh geometry={lineGeometry} material={lineMaterial} /> */}
        <ambientLight intensity={2} />
        {/* <directionalLight position={[-5, 5, 5]} intensity={10}/> */}
        {/* <OrbitControls /> */}
    </Fragment>)
}