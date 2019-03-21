const reverseString = require( '../ReverseString' );

// // The function called inside of beforeEach will run before every test
// beforeEach( () => initDatabase() );
// // The function called inside of afterEach will run after every test
// afterEach( () => closeDatabase() );
//
// const initDatabase = () => console.log( 'Database initialized' );
// const closeDatabase = () => console.log( 'Database Closed' );

const nameCheck = () => console.log( 'Checking Names...' );

describe( 'Checking Names', () => {
	beforeEach( () => nameCheck() );

	test( 'Use is Imran', () => {
		const user = 'Imran';
		expect ( user ).toBe( 'Imran' );
	} );

	test( 'Use is Sayed', () => {
		const user = 'Sayed';
		expect ( user ).toBe( 'Sayed' );
	} );
} );

// Check if the function is defined
test( 'reverseString function exists', () => {
	expect( reverseString ).toBeDefined();
} );

// Check if its function
test( 'reverseString is a function' , () => {
	expect( typeof reverseString ).toEqual( 'function' );
});

test( 'String Reverses', () => {
	expect( reverseString( 'Hello' ) ).toEqual( 'olleH' );
} );