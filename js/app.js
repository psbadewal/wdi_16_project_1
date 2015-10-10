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

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z']
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
alert(randomLetter);

//5. If player enters value and submits value, check starting value against the random character, then loop through each of the arrays to find whether the capital city, country and rivers are correct. Add an eventlistener
//6. Add a point if one box is correct, else 0
//7. Increment score and play up to five rounds to getWinner*/