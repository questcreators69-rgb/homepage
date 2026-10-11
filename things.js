document.addEventListener('DOMContentLoaded', function() {
  var suggestBtn = document.getElementById('suggest-btn');
  var suggestionDisplay = document.getElementById('suggestion-display');

  var suggestions = [
    'Listen to a new acoustic song you have not heard before.',
    'Go outside and take a quick photo of a flower or neat building.',
    'Doodle a funny little cartoon character in the margin of a notebook.',
    'Try writing down three fun facts you learned this week.',
    'Make a cold refreshing glass of lemonade or cold coffee.',
    'Read one chapter of an exciting mystery novel.',
    'Look up Shimla on a map and plan a hypothetical dream vacation.',
    'Draw a simple picture of your favorite snack.'
  ];

  if (suggestBtn && suggestionDisplay) {
    suggestBtn.addEventListener('click', function() {
      var randomIndex = Math.floor(Math.random() * suggestions.length);
      suggestionDisplay.textContent = suggestions[randomIndex];
    });
  }
});
