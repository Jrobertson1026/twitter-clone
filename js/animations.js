$(document).ready(function() {
  var userName = 'jrob';
  var fullName = $('#profile-summary p:first').text();
  var avatar = $('#profile-summary img:first').attr('src'); 
  



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

  $('#tweet-submit').on('click', function() {
    var text = $('.tweet-compose:first').val();
    var firsttweet = $('#stream > .tweet:first').clone();
    firsttweet.find('.avatar').attr('src', avatar);
    firsttweet.find('.fullname').text(fullName)
    firsttweet.find('.username').text(userName);
    firsttweet.find('.tweet-text').text(text);


    $('#stream').prepend(firsttweet);
    
  });



});
