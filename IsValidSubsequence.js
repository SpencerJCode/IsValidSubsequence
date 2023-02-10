var array = [1,73,8,5,8,2,99,5,3]
var sequence = [8,8,8,5]

function isValidSubsequence(array, sequence) {
  var array1 = [];
  for (var i=0;i<array.length;i++){
    console.log("Array index of "+i+" is "+array[i])
    for (var j=0;j<sequence.length;j++){
      console.log("Sequence index of "+j+" is "+sequence[j]);
      if (array[i] == sequence[j]){
        array1.push(sequence[j]);
        console.log("Adding "+sequence[j]+" to array1");
      }
      if (array1 = sequence){
        console.log(array1);
        console.log(sequence);
        return true
      }
    }
  }
  console.log(array1);
  console.log(sequence);
return false
}
var result = isValidSubsequence(array, sequence);
console.log(result);