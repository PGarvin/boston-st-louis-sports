'use strict';
(function() {


  var header = document.querySelector('.tally');
  var championships = document.querySelectorAll('.championship');
  var tallyYear = document.querySelector('.tally .tally__year');
  var BOSwins = document.getElementById('BOSwins');
  var STLwins = document.getElementById('STLwins');
  window.onscroll = function triggerSticky() {
    var bb1946 = document.getElementById('Baseball_1946').getBoundingClientRect().top;
    var bb2013 = document.getElementById('Baseball_2013').getBoundingClientRect().top;
    if (bb1946 < 50 && bb2013 > -50) {
      header.classList.add('sticky');
      header.classList.add('show');
      header.classList.remove('hide');
      championships.forEach(function (element, index) {
        var elementTop = element.getBoundingClientRect().top;
        if (index !== Number(championships.length - 1)) {
          var nextElement = championships[Number(index + 1)];
          var nextElementTop = nextElement.getBoundingClientRect().top;
          if (elementTop < 200 && nextElementTop > 50) {
            tallyYear.innerHTML = element.dataset.year;
            BOSwins.innerHTML = element.dataset.boswins;
            STLwins.innerHTML = element.dataset.stlwins;
          }
        } else if (index === Number(championships.length - 1) && elementTop < 50) {
          tallyYear.innerHTML = element.dataset.year;
          BOSwins.innerHTML = element.dataset.boswins;
          STLwins.innerHTML = element.dataset.stlwins;
        }
      });
    } else {
      header.classList.remove('sticky');
      header.classList.add('hide');
      header.classList.remove('show');
    }
    console.log(bb2013, bb1946);
  };


})();