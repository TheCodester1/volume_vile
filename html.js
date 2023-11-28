// Enable hidden nav bar
{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });

    
  }
    const header = document.querySelector('header')
    window.onscroll = function(){
        let top = window.scrollY
        console.log(top)
    }

 