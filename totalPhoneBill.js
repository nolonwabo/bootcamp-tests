var totalPhoneBill = function(Bills){
var Phone =Bills.split(',');
var total = 0;
  for(var i=0; i<Phone.length; i++){
   	var calls = Phone[i].trim();
    //console.log("|" + Phone[i] + "|");
    //console.log("||" + calls + "||");

    if(calls.startsWith('call')){
      total = total + 2.75;
    }
    else if(calls.startsWith('sms')){
      total = total + 0.65;
    }
  }
  console.log(total);
  return 'R' + total.toFixed(2);
  };
totalPhoneBill('call, sms, call, sms, sms, cat');

console.log(' sms'.trim().startsWith('sms'))
