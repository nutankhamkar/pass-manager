var argv = require('yargs')
	.command('adduser', 'Greets the user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here',
				type: 'string'
			},
			city: {
				demand: true,
				alias: 'c',
				description: 'Your city name goes here',
				type: 'string'
			},
			state: {
				demand: true,
				alias: 's',
				description: 'Your state name goes here',
				type: 'string'
			},
			secretquestion: {
				demand: true,
				alias: 'q',
				description: 'Your secret question',
				type: 'string'
			},
			secretanswer: {
				demand: true,
				alias: 'a',
				description: 'Your secret question answer',
				type: 'string'
			}
		}).help('help');
	})
	
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'adduser' && typeof argv.name !== 'undefind' && typeof argv.lastname !== 'undefined' && typeof argv.city !== 'undefined' && typeof argv.state !== 'undefinedd' && typeof argv.secretquestion !== 'undefinedd' && typeof argv.secretanswer !== 'undefinedd') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!' + ' ' + argv.city + ' ' + argv.state + ' ' + argv.secretquestion + ' ' + argv.secretanswer);	
} else if (command === 'adduser' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'adduser') {
	console.log('Hello world!');
}