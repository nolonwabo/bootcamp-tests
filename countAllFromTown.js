var countAllFromTown = function(regNumber, location){
  var Town = [];
  var NumberRegistration =regNumber.split(',')
  for(var i=0; i<NumberRegistration.length; i++){
    var countReg =NumberRegistration[i].trim();
    if(countReg.startsWith(location)){
      Town.push(NumberRegistration[i]);
    }
  }
  console.log(Town);
  return Town.length;
};
