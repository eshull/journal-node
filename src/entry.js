// export function journal(testInt) {
//   var output = [];
//   for (var i = 1; i <= testInt; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

export function Entry (title, body){
  this.title = title;
  this.body = body;
  this.wordNumber = function() {
    return this.body.split(' ').length
    // var wordsSplit = this.body.split(' ')
    // var count = wordsSplit.length()
    // return count
  }
  this.vowels = function() {
    var allLetters = this.body.split('')
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCounter = 0;
    for (var i = 0; i < allLetters.length; i++) {
      if (vowels.includes(allLetters[i])) {
          vowelCounter += 1;
        }
      }
      return vowelCounter;
  }
  this.consonants = function(){
    var allLetters = this.body.split('')
    return allLetters.length - this.vowels()
  }
  this.teaser = function(){
    var bodyArray = this.body.split(" ");
    return bodyArray.slice(0, 8).join(" ");
    }
  }
