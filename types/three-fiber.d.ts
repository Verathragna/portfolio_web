import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: import("@react-three/fiber").Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
    }
  }
}

export {};
