// You can add interactivity here, like smooth scrolling for a better user experience
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
  