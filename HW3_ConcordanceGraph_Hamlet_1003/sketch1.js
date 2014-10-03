//Karam Byun
var lines;
var text;

var dict = {}; //dictionary of all words
var bict = {}; //dictinoary of interesting words
var keys = []; //array of all words in order
var interest = []; //array of interesting words in order
var one =[]; //array oneshot words in order

function preload(){
	lines = loadStrings('data/full.txt');
}

function setup(){
	
	createCanvas(1960, 400);
   
	//background(0)
	//noCanvas();
	text = lines.join(' ');
	console.log(text)
	
	var tokens = text.split(/\W+/);
	console.log(tokens);
	
	for(var i = 0; i < tokens.length; i++){
		var token = tokens[i]
		token = token.toLowerCase();
		
		if(dict[token] === undefined){
			dict[token] = 1;
			keys.push(token);
		}
		
		
		else{
			dict[token]++;
		}
		
	}
	
	// keys.sort(function(a,b) {
	// 			return (dict[a] - dict[b]);
	// 		});

	//only get words that appear more than 1 and less than 30
	for(var i = 0; i < keys.length; i++){
		var key = keys[i]
		if(dict[key] > 2 && dict[key] < 30){
		
			if(bict[key] === undefined){
				bict[key] = dict[key];
				interest.push(key);
			}
			
			else{
				//bict[key]++
			}
		}
		else if(dict[key] == 1){
			one.push(key);
		}

	}

	// interest.sort(function(a,b) {
	// 			return (bict[a] - bict[b]);
	// 		});

}

function draw(){
	noStroke();
	//fill(0,180,244,10);
	//rect(0,0,width,heigth);
	
	background(100,180,210);
	
	for (var i = 0; i < keys.length; i++) {
		
		var size = dict[keys[i]];

		if(size > 200){
			fill(255,0,100,255*(size/(993*4)));
			ellipse(width*i/keys.length,height*0.2,size,size)
		}

		else if(size > 20 && size <200){
			fill(144,200,0,255*(size/300));
			ellipse(width*i/keys.length,height*0.55,size,size)
		}

		else{
			fill(255,255*(size/40));
			ellipse(width*i/keys.length,height*0.85,size,size)
		}
	};
}

function keyPressed(){
	background(0);

	if(keyCode == 's'){
	keys.sort(function(a,b) {
				return (dict[a] - dict[b]);
	 		});

	interest.sort(function(a,b) {
	 			return (bict[a] - bict[b]);
	 		});
	}
}


