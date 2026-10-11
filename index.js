document.addEventListener('DOMContentLoaded', function() {
  var secretBtn = document.getElementById('secret-btn');
  var secretMsg = document.getElementById('secret-message');

  if (secretBtn && secretMsg) {
    secretBtn.addEventListener('click', function() {
      if (secretMsg.style.display === 'none' || secretMsg.style.display === '') {
        secretMsg.style.display = 'block';
        secretMsg.textContent = 'Fun fact: I spent 20 minutes deciding what background color to pick for this website, and finally picked cream!';
      } else {
        secretMsg.style.display = 'none';
      }
    });
  }

  var moodButtons = document.querySelectorAll('.mood-btn');
  var moodText = document.getElementById('mood-text');

  if (moodButtons && moodText) {
    moodButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var mood = button.getAttribute('data-mood');
        if (mood === 'Happy') {
          moodText.textContent = 'Awesome! Keep smiling and enjoy your wonderful day!';
        } else if (mood === 'Sleepy') {
          moodText.textContent = 'Time for a quick catnap or a warm cup of cocoa!';
        } else if (mood === 'Excited') {
          moodText.textContent = 'Yay! Energy level 100%! Go do something fun today!';
        } else if (mood === 'Tired') {
          moodText.textContent = 'Take it easy, rest up, and stretch a little bit.';
        }
      });
    });
  }

  var timedGreeting = document.getElementById('timed-greeting');
  if (timedGreeting) {
    setTimeout(function() {
      timedGreeting.style.display = 'block';
      timedGreeting.textContent = 'Thanks for stopping by my homepage! Feel free to click around and explore.';
    }, 2500);
  }
});