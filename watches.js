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
    email_body += ev.detail.card.firstElementChild.currentSrc + " ";
    updatecounter();
  });

  document.body.addEventListener('nopecard', function(ev) {
    updatecounter();
  });

  document.body.addEventListener('deckempty', function(ev) {
    results.innerHTML += '<li><button onclick="window.print();">Print results</button></li>';
    results.innerHTML += '<li><a href="mailto:ykorman+annawatches@gmail.com?subject=AnnaWatches&amp;body=' +
    			encodeURIComponent(email_body) + '">Send email</a>';
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
