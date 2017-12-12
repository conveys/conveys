console.log('\'Allo \'Allo!');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById('navbar').classList.add('active');
  } else {
    document.getElementById('navbar').classList.remove('active');
  }
}