const reverseString = require( '../ReverseString' );

// Check if the function is defined
test( 'reverseString function exists', () => {
	expect( reverseString ).toBeDefined();
} );

test( 'String Reverses', () => {
	expect( reverseString( 'Hello' ) ).toEqual( 'olleH' );
} );