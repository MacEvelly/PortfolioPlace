import { GLTFLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/DRACOLoader.js';
import { setupEnvironment } from './setupEnvironment.js';


async function loadEnvironment() {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( '/vendor/three/examples/js/draco/' );
  loader.setDRACOLoader( dracoLoader );

  const [environmentData] = await Promise.all([
    loader.loadAsync('/assets/models/Portfolio-Place.glb')
  ]);

  const environment = setupEnvironment(environmentData);
  environment.position.set(0, -.075, 0);

  return { environment };
}

export { loadEnvironment };