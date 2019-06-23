$(document).ready(function() {

  let wrapper = $('#wrapper');
  let topLayer = $('.top');
  let skew = 0;
  let delta = 0;

  if($(wrapper).hasClass('skewed')) {
    skew = 1000;
  }

  var countingUp = 1;
  var i = 0;

  function count() {

      i = i + (1 * countingUp);

      if (i == 3000 || i == 0)
      {
          countingUp *= -1;
      }

      $(topLayer).css('width', i + 'px');

  }

  window.setInterval( count, 5 );

  // $(wrapper).mousemove(function(e) {
  //   delta = (e.clientX - window.innerWidth / 2) * 0.5;
  //   let topLayerWidth = e.clientX + skew + 'px';
  //   console.log(topLayerWidth);
  //   $(topLayer).css('width', e.clientX + skew + delta + 'px');
  // });

});
