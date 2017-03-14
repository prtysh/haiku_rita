var line1;
var line2;
var line3;
var lexicon;

//adverb = rb
//verb = vbz
//noun = nn
//adjective = jj
function setup() {
  createCanvas(600,200);

  line1 = new RiGrammar();
  line2 = new RiGrammar();
  line3 = new RiGrammar();
  lexicon = new RiLexicon();
  line1.addRule('<start>', '<l1w1> <l1w2> <l1w3>', 1);
  line1.addRule('<l1w1>', lexicon.randomWord("nn",2), 1);
  line1.addRule('<l1w2>', lexicon.randomWord("vbz",1), 1);
  line1.addRule('<l1w3>', lexicon.randomWord("rb",2), 1);

  line2.addRule('<start>', '<l2w1> <l2w2> <l2w3> <l2w4> <l2w5>', 1);
  line2.addRule('<l2w1>', lexicon.randomWord("dt",1), 1);
  line2.addRule('<l2w2>', lexicon.randomWord("jj",2), 1);
  line2.addRule('<l2w3>', lexicon.randomWord("nn",1), 1);
  line2.addRule('<l2w4>', lexicon.randomWord("vbz",1), 1);
  line2.addRule('<l2w5>', lexicon.randomWord("rb",2), 1);

  line3.addRule('<start>', '<l3w1> <l3w2> <l3w3>', 1);
  line3.addRule('<l3w1>', lexicon.randomWord("rb",1), 1);
  line3.addRule('<l3w2>', lexicon.randomWord("vbz",2), 1);
  line3.addRule('<l3w3>', lexicon.randomWord("nn",2), 1);
}
/*
function line1foo (){
  return lexicon.randomWord("vbz",2);
}
*/

function draw(){
 background(51);
 textSize(26);
 fill (200);
 text(line1.expand(), 20 , 75);
 text(line2.expand(), 20, 110);
 text(line3.expand(), 20, 145);
}
