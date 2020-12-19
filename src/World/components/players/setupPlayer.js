import { AnimationMixer } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function setupPlayer(data) {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  data.animations.map( (C)=>{
    console.log(C.name)
  })
  model.traverse( function ( child ) {
    if ( child.isMesh ) {
      child.castShadow    = true;
      child.receiveShadow = true;
    }
  });

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta) => mixer.update(delta)

  return model;
}

export { setupPlayer };
