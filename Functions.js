const axios = require( 'axios' );

const functions = {
	add: ( num1, num2 ) => num1 + num2,
	isNull: () => null,
	checkValue: ( param ) => param,

	createUser: () => {

		const user = { firstName: 'Imran' };
		user['lastName'] = 'Sayed';

		return user;
	},

	addLoadValues: ( loadOne, loadTwo ) => {
		return loadOne + loadTwo;
	},

	displayTeamName: ( teamName ) => {
		return teamName;
	},

	getUserLists: () => {
		return [ 'Imran', 'Mark', 'Himanshu' ];
	},

	fetchUser: () => {
		return axios.get( 'https://jsonplaceholder.typicode.com/users/1' )
			.then( res => res.data )
			.catch( error => error )
	}
};
module.exports = functions;