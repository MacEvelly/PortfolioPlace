import { Color, Scene, Fog } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createScene() {
  const scene = new Scene();
  const color = 0xADDAFF
  scene.background = new Color(color);
  scene.fog = new Fog( color, 75, 100 );
  return scene;
}

export { createScene };
