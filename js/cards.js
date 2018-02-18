// Calls functions to be fired when page ready
$(function () {
  initCards();
  cardActions();
})

var initCards = function() {
 $('#employer-benefit-group-card p.health-details').click(function() {
   $('p.health-details').toggle();
   $('#employer-benefit-group-card .collapse').collapse('toggle');
 })
}

var cardActions = function() {
  $('#benefit-model-selection .plan-details').each(function() {
    input = $(this).find('i');
    $(this).click(function() {
      console.log(input)
    })
  })
}