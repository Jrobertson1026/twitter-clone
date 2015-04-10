$(document).ready(function() {

  $('textarea').blur(function() {
    if (!$(this).val()) {
      $('#tweet-controls').hide();
      $(this).css('height', '2.5em');
    }
  })

  $('textarea').focus(function() {
    $('#tweet-controls').show();
    $(this).css('height', '5em');
  })
  $('textarea').on('keypress keyup paste', function() {
    var count = $('textarea').val().length;
    var countleft = 140 - count;
    $('#char-count').html(countleft);

    if (countleft <= 10) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '');
    }
    stoptweet();
  })
  var stoptweet = function() {
    if (($('textarea').val().length) >= 140) {
      $('.button').css({
        'background': 'red',
        'color': 'black'
      });
      $('.button').prop('disabled', true);
    } else {
      $('.button').css('background', '');
      $('.button').prop('disabled', false);
    }
  };

})
$('#tweet-content', '.tweet-compose').on('click', function() {
$('textarea').val()
})



});
