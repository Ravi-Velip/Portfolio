
function logo(){
    const logo = document.querySelectorAll(".logo span");
    const symbol = document.querySelectorAll(".symbol span");
    
    
    let tl = gsap.timeline();
    
    
    tl.from(logo, {
      duration: 1.5,
      opacity: 0,
      // ease: "bounce",
      right: "100%",
      stagger: 0.2,
    });
    
    
    tl.from(symbol, {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
    
    
    
    tl.to(".line-under", {
      duration: 1,
      width: "100%",
    }, "<");
    
    tl.to(".line-under", {
      duration: 1,
      width: "8.4vw",
      ease: "bounce"
    },"<1");
    
}

