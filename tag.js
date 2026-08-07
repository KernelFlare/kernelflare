function touch(element) {
  document.getElementById('popSound').play();
  
  element.classList.add('tagtap');
  
  setTimeout(() => {
    element.classList.remove('tagtap');
  }, 1000); 
}
