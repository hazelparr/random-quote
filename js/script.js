var shownQuotes = []; //holds the quotes already shown


// generates random index to retrieve quote object
function getRandomQuote() {

    // resets if all quotes are shown
    if (quotes.length === shownQuotes.length) {
        shownQuotes = [];
    }

    var index = 0;
    var randomQuote;
    do {
        index = Math.floor(Math.random() * quotes.length)
        randomQuote = quotes[index];

    } while (shownQuotes.indexOf(randomQuote) > -1);

    shownQuotes.push(randomQuote);
    console.log(shownQuotes.length)
    return randomQuote;
}

// gets random quote and builds html
function printQuote() {
    var randomQuote = getRandomQuote(quotes);
    var toHTML = '<p class="quote">' + randomQuote["quote"] + '</p>';
    toHTML += '<p class="source">' + randomQuote["author"];
    toHTML += '<span class="citation">' + randomQuote["source"] + '</span>';
    toHTML += '<span class="year">' + randomQuote["year"] + '</span></p>';
    toHTML += '<p class="tags"> Category: ' + randomQuote["category"] + '</p>'
    console.log(toHTML);
    document.getElementById('quote-box').innerHTML=toHTML;
    var newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('loadQuote').style.backgroundColor = newColor;
}

// generates random color
function getRandomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return rgb;
}

//automatically changes quote after 30 secs
var intervalID = window.setInterval(printQuote, 30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
