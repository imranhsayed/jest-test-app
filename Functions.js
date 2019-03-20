const functions = {
		add: ( num1, num2 ) => num1 + num2,
		isNull: () => null,
		checkValue: ( param ) => param,

		createUser: () => {

			const user = { firstName: 'Imran' };
			user['lastName'] = 'Sayed';

			return user;
		}
	};
module.exports = functions;