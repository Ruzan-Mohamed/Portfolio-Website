// Javascript fo toggling the navbar on small screens 
function toggleMenu(){
      const menu = document.querySelector('.navbar ul');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

//Close the menu when a link clicked (For Mobiles)
document.querySelectorAll('.navbar ul li a') .forEach (link => {
      link.addEventListener('click', () => {
            const menu = document.querySelector ('.navbar ul');
            if (window.innerWidth < 768) {
                  menu.style.display = 'none';
            }
            else if (window.innerWidth > 768) {
                  menu.style.display = 'flex';
            }
      })
});
