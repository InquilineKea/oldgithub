var disqus_config = function() {
  this.page.url = window.location.hostname + window.location.pathname;
  this.page.identifier = window.location.pathname;
}

function tweakDisqus() {
  var threads = document.querySelector('#disqus_thread');
  threads.style = 'margin-bottom: -55px;';
}

var readyChecker;
var frame;
function disqusReady() {
  //var ready = document.querySelector('.disqus-footer__logo');
  frame = document.querySelector('iframe');

  if (frame) {
    tweakDisqus();
    clearInterval(readyChecker);
  } else {
    console.log('ready not found: ', ready);
  };
}
function disqusReadyInterval() {
  readyChecker = setInterval(disqusReady, 1000);
}

function loadDisqus() {
  this.remove();
  loadScript('//hugo-melo.disqus.com/embed.js', function() {
    disqusReadyInterval();
  });
}

var showCommentsButton = document.querySelector('.show-comments');
showCommentsButton.onclick = loadDisqus;
