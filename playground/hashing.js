const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id:10,
}

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token, 'abc123');
console.log(decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash : SHA256(JSON.stringify(data) + 'someSecret').toString()
// }
//
// console.log((JSON.stringify(data.id)+'someSecret'),token.hash);
//
// console.log('new value: ', SHA256('4' + 'someSecret').toString());
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();
//
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// }else {
//   console.log('Data was changed');
// }
