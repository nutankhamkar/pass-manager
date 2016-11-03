console.log('start');
var storage = require('node-persist');
storage.initSync();
storage.setItemSync('accounts',[{
	username: 'Asreet',
	balance: 100
	
},


{
 username: 'nutan',
	balance: 200
}]);
var accounts = storage.getItemSync('accounts');
console.log(accounts);
accounts.push({
	
	username: 'nilam',
	balance: 300
});
storage.setItemSync('accounts',accounts);
console.log(accounts);