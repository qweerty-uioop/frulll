let inizioFrull = 1000;

window.addEventListener('scroll', function() {
	if (scrollY>inizioFrull){
  document.querySelector('#container').style.marginLeft =
    Math.max(0, 0.1*(this.scrollY-inizioFrull)) + 'px';
} else {document.querySelector('#container').style.marginLeft =0}
}, false);

window.addEventListener('scroll', function() {
	if (scrollY>inizioFrull){
  document.querySelector('#container').style.marginRight =
    Math.max(0, 0.1*(this.scrollY-inizioFrull)) + 'px';
} else {document.querySelector('#container').style.marginRight =0}
}, false);