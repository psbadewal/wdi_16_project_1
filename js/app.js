/*Game: Stadt, Land, Fluss (Ctranslated from German: City, Country, River) is a ("fun") (timed) geography game, in which the player enters a capital city, country and a (well-known) river based on a random letter (a-z; excl. x) generated by the computer. The random character is the starting letter for each of the values the player assigns to capital city, country and river. 

Example: If Math.random() generates "T", player could enter the following values: "Thehran" (any capital city starting with T), "Turkey" (any country starting with T), "Thames" (any river starting with T)

Technical: Ideally, a round will be timed to 30-60 seconds once Math.random() has generated a random character.
Player gets 3 points when all 3 input values are correct and the answers match (1) starting character and (2) a database/an array of capital cities, countries and well-known rivers. Player gets 2 points for 2 correct values, 1 for for 1 correct value and 0 if no value has been given. Should there be 2 players, they will each take turns on different letters.  

1. Structure HTML document with tags, buttons, and divs
2. Add very basic(!) CSS or maybe not
*/

// 3. Add function window.onload {}
//4. To generate a random letter, use the following code:

window.onload = function() {

  var button = $("#letterGenerator");
  var player1Score = 0;
  var round  = 0;

  $("#target").on("submit", validateForm);

  $("button").on("click", function(){
    getRandomLetter(startTimer);
  });

  function getRandomLetter(callback) {
    var alphabet = ['A','B','C'];
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    $("#test").html(randomLetter);
    $("#country").val(randomLetter);
    $("#capital_City").val(randomLetter);
    $("#currency").val(randomLetter);

    // Start timer
    callback();
  }

  function startTimer(){
    console.log("GO")

    // When timer runs out -> clearBoard
  }

  function stopTimer(){

  }

  function clearBoard(){

  }

  function validateForm() {
    event.preventDefault();

    var country1 = $("#country").val();
    var capititalCity1 = $("#capital_City").val();
    var currency1 = $("#currency").val();
    player1Score;

    if (countries.indexOf(country1)>-1) {
      player1Score++;
    } else {
      player1Score;
    }

    if (capitalCities.indexOf(capititalCity1)>-1) {
      player1Score++;
    } else {
      player1Score;
    }

    if (currencies.indexOf(currency1)>-1) {
      player1Score++;
    } else {
      player1Score;
    }

    $("#displayScoreId").html("Score: " + player1Score);
  }

  var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Arzebaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Carpe Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Croatia", "Cuba", "Cyprus", "Czech Republic"];

  var capitalCities = ["Abu Dhabi", "Abuja", "Accra", "Adamstown", "Addis Ababa", "Algiers", "Alofi", "Ankara", "Amman", "Amsterdam", "Andorra", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asuncion", "Athens", "Avaru", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basse-Terre", "Basse-Terre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bloemfontein","Bogotá", "Brasília", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Cairo", "Canberra", "Cape Town", "Caracas", "Castries", "Cayenne", "Charlotte Amalie", "Chisinau", "Cockburn Town", "Canakry", "Copenhagen",];

  var currencies = ["Argentine Peso", "Arubian Guilder", "Australian Dollar", "Armenian Dram", "Azerbaijan Manat", "Bahamian Dollar", "Bahraini Dinar", "Bangladeshi Taka", "Barbadian Dollar", "Barbados Dollar", "Belize Dollar", "Bermudian Dollar", "Bhutan Ngultrum", "Bolivia Boliviano", "Botswana  Pula", "Brazilian Real", "Brunei Dollar", "Bulgarian Lev", "Burmese Kyat", "Cape Verde Escudo", "Cambodia  Riel", "Canadian Dollar", "Chilean Peso", "Chinese Yuan"]; 

};

//5. If player enters value and submits value, check starting value against the random character, then loop through each of the arrays to find whether the capital city, country and rivers are correct. Add an eventlistener
//6. Add a point if one box is correct, else 0
//7. Increment score and play up to five rounds to getWinner*/