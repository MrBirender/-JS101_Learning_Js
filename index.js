
var str = ['mna', 'tan', 'gun', 'bun', 'mna'];
var word = "tan"
var minus1 = ''
function last_index_of(str, word){
  for(var i=str.length-1; i>=0; i--){
    var value = str[i]

// checking the value if it is inside the str or not;
    if(word != value){
      } 
    else{
      var index_value = str.indexOf(value)
      return index_value
    }
  }
// if it is not in str returning -1;
  return -1
}
var result = last_index_of(str, word)
console.log(result)





