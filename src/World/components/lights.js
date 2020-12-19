import { DirectionalLight, HemisphereLight, CameraHelper, HemisphereLightHelper } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createLights() {

  const hemiLight = new HemisphereLight(0xffeeb1, 0x080820, 6);
  const hemiLightHelper = new HemisphereLightHelper( hemiLight, 5 );

  const shadowSize = 50;
  const dirLight = new DirectionalLight('white', 4);
  dirLight.position.set(15, 20, 15);
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 2048*2;
  dirLight.shadow.mapSize.height = 2048*2;
  
  dirLight.shadow.camera.left = -shadowSize;
  dirLight.shadow.camera.right = shadowSize;
  dirLight.shadow.camera.top = shadowSize;
  dirLight.shadow.camera.bottom = -shadowSize;
  dirLight.shadow.bias = -0.001
  
  dirLight.shadow.camera.near = 5;
  dirLight.shadow.camera.far = 65;
  
  const dirLightHelper = new CameraHelper(dirLight.shadow.camera);

  return { 
    hemiLight, hemiLightHelper,
    dirLight, dirLightHelper
  };
}

export { createLights };
