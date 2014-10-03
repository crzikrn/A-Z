// Scramble what the user enters into a text field

// The scrambled text
var reversed = "";
var input;

function setup() {
  //noCanvas();
   
  // A text area
  input = createElement("textarea","\"Nearly all men can stand adversity, but if you want to test a man's character, give him power.\" - Abraham Lincoln");
  
  input.attribute("rows",5);
  input.attribute("cols",50);
  input.style('position','absolute');
  input.style('top','50px');
  
  // A button
  var button = createButton("Shakespeare it!");
  button.style('position','absolute');
  button.style('left','416px');
  button.style('top','140px');
  button.mousePressed(doublewords);
  
  // An HTML Element for the resulting text
  reversed = createP("");
	reversed.style('font-size','60px');
	reversed.style('font-style','bold');
	reversed.style('color','#2e2e2e');
	reversed.style('font-family','Roboto Slab');
	reversed.style('position','absolute');
	reversed.style('top','140px');
	reversed.style('left','90px');
	reversed.style('background','0');
}

function doublewords() {
  // What has the user entered?
  var text = input.value();

  var regex = [];
  regex[0] = /(your)|(you)/gi;
  regex[1] = /(y'all)/gi;
  regex[2] = /(women)|(woman)/gi;
  regex[3] = /(men)|(man)/gi;
  regex[4] = /(friend)/gi; 
  regex[5] = /(fuck)|(bitch)/gi
  regex[6] = /(^i|I$)/gi
  
  var out = [];
  out[0] = 'thou';
  out[1] = 'ye';
  out[2] = 'mistress';
  out[3] = 'sirrah';
  out[4] = 'cousin';
  out[5] = either('jackanapes','canker-blossoms');
  out[6] = either(' I ',' methinks ');
  //use of dictionary a better method?  
  
  //var output; 	
  // Replacing the vowel with two of itself
  // var textThou = text.replace(regexYou,'thou');
  // var textYe = textThou.replace(regexYe,'ye');
  // var textMist = textYe.replace(regexWomen,'mistress');
  // var textSirrah = textMist.replace(regexMen,'sirrah');
  // var textCousin = textMist.replace(regexFriend,'cousin');
  // var textThe = textCousin.replace(regexThe,'ye');
  // var output = textThe.replace(regexCurse,'canker-blossoms');
  // reversed.html(output);
  
  // Update the HTML Element
   var output = text;
 
   for(var i=0; i < regex.length; i++){
	
	output = output.replace(regex[i],out[i]);
	
  }
   
  reversed.html(output);
   
}

function either(a,b){

	var p = Math.random()
	if(p>0.5){
		return a
	}
	else return b

}