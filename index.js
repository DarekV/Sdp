var controller = new ScrollMagic.Controller();

var transition = new TweenMax.to(".transition_debut", 2, {
  y: -150,
});

var containerScene = new ScrollMagic.Scene({
  offset: 50,
  duration: 800,
})
  .setTween(transition)
  .addIndicators()
  .addTo(controller);


  var controller = new ScrollMagic.Controller();

var transition = new TweenMax.to(".transition_fin", 1, {
  y: -150,
});

var containerScene = new ScrollMagic.Scene({
  offset: 2500,
  duration: 1500,
})
  .setTween(transition)
  .addIndicators()
  .addTo(controller);