TweenMax.to(".overlay h1", 0.7, {
    delay: 1,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOuts

})


TweenMax.to(".overlay", 1.7, {
    delay: 1.2,
    top: "-100%",
    ease: Expo.easeInOuts

})

TweenMax.from(".logo", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOuts

})


TweenMax.staggerFrom(".nav ul li", 0.6, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOuts

}, 0.2)

TweenMax.staggerFrom(".social-media ul li", 0.6, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOuts

}, 0.2)


TweenMax.from(".row", 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOuts

})

