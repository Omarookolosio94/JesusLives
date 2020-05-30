$('.ripple-ShopifyTips').ripples({
  // Image Url
  imageUrl: null,

  // The width and height of the WebGL texture to render to.
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 256,

  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,

  // Basically the amount of refraction caused by a ripple.
  // 0 means there is no refraction.
  perturbance: 0.04,

  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,

  // The crossOrigin attribute to use for the affected image.
  crossOrigin: ''
});

var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.1, 1];
ml4.scaleOut = 0.5;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 8000;

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-5',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-5',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-6',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-6',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-7',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-7',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-8',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-8',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: 20000
  })
  .add({
    targets: '.ml4 .letters-9',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-9',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-10',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-10',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
