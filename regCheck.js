var isFromCapeTown = function(capeTown){
  var Registration =capeTown.startsWith('CA')
  console.log(Registration);
  return Registration;
};
isFromCapeTown('CA 286669');
isFromCapeTown('EC 86565');
