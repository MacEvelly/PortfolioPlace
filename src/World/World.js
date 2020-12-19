import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene  } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer        } from './systems/Resizer.js';
import { Loop           } from './systems/Loop.js';

import { loadPlayer      } from './components/players/player.js';
import { loadEnvironment } from './components/environment/Environment.js'

let camera, controls, renderer, scene, loop;

class World {
  constructor(container) {
    camera   = createCamera();
    renderer = createRenderer();
    scene    = createScene();
    loop     = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { hemiLight, dirLight, dirLightHelper, hemiLightHelper } = createLights();
    scene.add( hemiLight, dirLight );

    //addHelpers
    //scene.add( dirLightHelper, hemiLightHelper );

    loop.updatables.push(controls);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { player } = await loadPlayer()
    const { environment } = await loadEnvironment()
    loop.updatables.push( player )
    scene.add(  player, environment);
  }

  render() { renderer.render(scene, camera); }
  start()  { loop.start(); }
  stop()   { loop.stop();  }
}

export { World };

