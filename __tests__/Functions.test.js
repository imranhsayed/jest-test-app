const functions = require( '../Functions' );

// Check if the result toBe()
test( 'Adds 2 + 2 to equal 4', () => {
	expect( functions.add( 2, 2 ) ).toBe( 4 );
} );

// Check if the result is not.toBe()
test( 'Adds 2 + 2 to NOT equal 5', () => {
	expect( functions.add( 2, 2 ) ).not.toBe( 5 );
} );

// Check if the value is null
test( 'Should be null', () => {
	expect( functions.isNull() ).toBeNull();
} );

// Check if the value is falsy
test( 'Should be falsy', () => {
	expect( functions.checkValue( 0 ) ).toBeFalsy();
} );

// Check function's return alue as user object
test( 'User should be Imran Sayed object', () => {
	expect( functions.createUser() ).toEqual( { firstName: 'Imran', lastName: 'Sayed' } );
} );