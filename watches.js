(function(){

  var all = 0;
  var results = document.querySelector('#results');
  var counter = document.querySelector('#counter');
  var email_body = "";

  function updatecounter() {
    --all;
    counter.innerHTML = all;
  }

  document.body.addEventListener('yepcard', function(ev) {
    results.innerHTML += '<li>'+ev.detail.card.innerHTML+'</li>';
    email_body += ev.detail.card.firstElementChild.alt + ": ";
    email_body += ev.detail.card.firstElementChild.currentSrc + " ";
    updatecounter();
  });

  document.body.addEventListener('nopecard', function(ev) {
    updatecounter();
  });

  document.body.addEventListener('deckempty', function(ev) {
    results.innerHTML += '<li><a href="mailto:ykorman@gmail.com?subject=AnnaWatches&amp;body=' +
          encodeURIComponent(email_body) + '">(mobile) Send Yigal an email with the results!!!</a>'
    results.innerHTML += '<li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ykorman@gmail.com&su=watches&body=' +
    			encodeURIComponent(email_body) + '">(desktop) Send Yigal an email with the results!!!</a>'
    results.classList.add('live');
    ev.detail.container.style.display = 'none';
  });

  window.addEventListener('load', function(ev) {
    all = document.body.querySelectorAll('.card').length + 1;
    updatecounter();
  });

  document.body.addEventListener('keyup', function(ev){
    if (ev.which === 39) {
      document.querySelector('.but-yay').click();
    }
    if (ev.which === 37) {
      document.querySelector('.but-nope').click();
    }
  });
})();
