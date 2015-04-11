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
      $('.button').prop('disabled', true);
    } else {
      $('.button').prop('disabled', false);
    }
  };

  $('.button').on('click', function() {
    $('#content').prepend('click', function() {
      var avat = $('.avatar').val();
      var tcontent = $('#tweet-content').val();
      var tcompose = $('#tweet-compose').val();
      var tcontrols = $('#tweet-controls').val();
      var tactions = $('tweet-actions').val();
      var ttext = $('.tweet-text').val();
      var stat = $('.stats').val();
      var favs = $('.favorites').val();
      var interac = $('.users-interact').val();
      var rep = $('.reply').val();
      var time = $('.time').val();
      $(this).html('avat' + 'tcontent' + 'tcompose' + 'tcontrols' + 'tactions' + 'ttext' + 'stat' + 'favs' + 'interac' + 'rep' + 'time');

    })
  })



});
