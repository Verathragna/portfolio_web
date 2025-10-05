"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uScroll;
  varying vec2 vUv;

  float noise(vec2 p) {
    return sin(p.x) * sin(p.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 pointer = uPointer;
    float scrollFactor = clamp(uScroll * 0.002, -1.5, 1.5);

    float wave = sin((uv.y + uTime * 0.08) * 6.0) * 0.05;
    float shimmer = sin((uv.x * 3.5 + uTime * 0.2) + wave) * 0.04;
    float base = uv.y + shimmer + scrollFactor;

    vec3 deep = vec3(0.015, 0.035, 0.09);
    vec3 mid = vec3(0.06, 0.12, 0.24);
    vec3 accent = vec3(0.08, 0.22, 0.38);

    vec3 color = mix(deep, mid, base);

    float pointerGlow = exp(-10.0 * distance(uv, pointer));
    color += accent * pointerGlow;

    float grain = noise(uv * 10.0 + uTime * 0.15) * 0.02;
    color += grain;

    gl_FragColor = vec4(color, 0.9);
  }
`;

interface AnimatedPlaneProps {
  pointer: THREE.Vector2;
  scroll: number;
}

function AnimatedPlane({ pointer, scroll }: AnimatedPlaneProps) {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
    }),
    []
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
      }),
    [uniforms]
  );

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(2, 2, 256, 256),
    []
  );

  const mesh = useMemo(() => {
    const m = new THREE.Mesh(geometry, material);
    m.scale.set(5.5, 5.5, 1);
    return m;
  }, [geometry, material]);

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uPointer.value.lerp(pointer, 0.08);
    uniforms.uScroll.value = THREE.MathUtils.lerp(
      uniforms.uScroll.value,
      scroll,
      0.08
    );
  });

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  // @ts-ignore - three-fiber primitive typed via runtime
  return <primitive object={mesh} />;
}

export default function SceneBackground() {
  const [pointer, setPointer] = useState(() => new THREE.Vector2(0.5, 0.5));
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = 1 - event.clientY / window.innerHeight;
      setPointer(new THREE.Vector2(x, y));
    };

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
        <AnimatedPlane pointer={pointer} scroll={scroll} />
      </Canvas>
    </div>
  );
}



