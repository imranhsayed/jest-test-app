const reverseString = require( '../ReverseString' );

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