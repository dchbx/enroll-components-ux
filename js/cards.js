// Calls functions to be fired when page ready
$(function () {
  initCards();
})

var initCards = function() {
 $('#employer-benefit-group-card p.health-details').click(function() {
   $('p.health-details').toggle();
   $('#employer-benefit-group-card .collapse').collapse('toggle');
 })
}
