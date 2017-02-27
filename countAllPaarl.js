var countAllPaarl = function(count){
  var Paarl = [];
  var NumberRegistration = count.split(', ')
 for(var i=0; i<NumberRegistration.length; i++){
   if(NumberRegistration[i].startsWith('CJ')){
     Paarl.push(NumberRegistration[i]);
   }
 }
  //console.log(Paarl)
  return Paarl.length;
};
var howManyPaarl = countAllPaarl('CL 3596, CJ 5464, CA 5296, CJ 6556, CJ 6625');
console.log(howManyPaarl)
