import { MeshBasicMaterial } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function setupEnvironment(data) {
  const model = data.scene;

  const transparent = new MeshBasicMaterial({
    color: 0x000000,
    opacity: 0.5
    ,
    transparent: true,
  });

  model.traverse( function ( child ) {
    if ( child.isMesh ) {
      child.castShadow    = true;
      child.receiveShadow = true;
      if(/hide/ig.test(child.name)){
        child.material = transparent
      } 
    }
  });
  console.log(model)
  return model;
}

export { setupEnvironment };
