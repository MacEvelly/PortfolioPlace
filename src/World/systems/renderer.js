import { WebGLRenderer, ReinhardToneMapping, PCFSoftShadowMap } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  renderer.toneMapping = ReinhardToneMapping;
  renderer.toneMappingExposure = 2.3;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap
  return renderer;
}

export { createRenderer };
