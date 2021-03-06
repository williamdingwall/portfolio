

// conditionally load livereload & GA based on host

var hostName = window.location.hostname;

if (hostName === 'williamdingwall.com') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-163835667-1');
}

if (hostName === 'localhost') {
  var livereloadScript = document.createElement('script');
  livereloadScript.setAttribute('src','http://localhost:35729/livereload.js');
  document.head.appendChild(livereloadScript);
}
