var controller = new ScrollMagic.Controller();

var transition = new TweenMax.to(".img_transition", 2, {
  y: -150,
});

var containerScene = new ScrollMagic.Scene({
  offset: 50,
  duration: 800,
})
  .setTween(transition)
  .addIndicators()
  .addTo(controller);