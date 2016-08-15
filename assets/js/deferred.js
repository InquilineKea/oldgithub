var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;

function loadScript(src, callback) {
  var s, r, t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if (!r && (!this.readyState || this.readyState == 'complete')) {
      r = true;
      callback();
    }
  };
  (document.head || document.body).appendChild(s);
}

function onLoad(fn) {
  if (raf) {
    raf(function() { window.setTimeout(fn, 0); });
  } else {
    window.addEventListener('load', fn);
  }
}

onLoad(function loadDeferredStyles() {
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.head.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode);
});
