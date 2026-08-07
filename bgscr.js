const IsFirefox = /firefox|fxios|fennec/i.test(navigator.userAgent);
if (isFirefox) {
  window.addEventListener('scroll', () => {
    const bgImg = document.querySelector('.bgimg');
    if (bgImg){
      const scrolled = window.scrollY;
      const speedFactor = 0.3; 
      bgImg.style.transform = `translateY(${scrolled * speedFactor}px)`;
    }
  });
}
