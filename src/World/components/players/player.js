import { GLTFLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/GLTFLoader.js';
import { setupPlayer } from './setupPlayer.js';


async function loadPlayer() {
  const loader = new GLTFLoader();

  const [playerData] = await Promise.all([
    loader.loadAsync('/assets/models/Brett.glb')
  ]);

  console.log('Player', playerData);

  const player = setupPlayer(playerData);
  player.position.set(0, 0, 0);

  return { player };
}

export { loadPlayer };
