
// init Isotope after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.isotope({
    itemSelector: '.grid-item',
    stamp: '.stamp',
   masonry: {
     columnWidth: 3

   }
  });
});
