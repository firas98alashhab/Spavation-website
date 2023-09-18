window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }