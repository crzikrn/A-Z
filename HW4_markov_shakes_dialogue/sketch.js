// Karam Byun
// From Daniel Shiffman's
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

var lines;
// The Markov Generator object
var generator;
var paragraph =[]


// Preload the seed data of the acts
function preload() {
  lines = loadStrings('data/dialogue.txt');
}


function setup() {
  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  generator = new MarkovGenerator(6, 50);
  // Feed all the lines from the text file into the generator
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  // Set up a button
  var button = getElement('button');
  button.mousePressed(generate);
  noCanvas();
}

function generate() {
  // Display the generated text
  var output
  var text

  // Get 10 lines
  for (var i = 0; i < 10; i++) {
    output = getElement('namep');
    text = generator.generate();
    paragraph.push(text)
    console.log(paragraph)
  }

  // Each line gets a new html p tag
  for (var i = 0; i < paragraph.length; i++) {
    createP(paragraph[i]);
    
  }

  // Clear paragraph for new lines
  paragraph = []
  //output.html(paragraph);

}
