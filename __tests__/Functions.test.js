const functions = require( '../Functions' );

// toBe: Check if the result toBe()
test( 'Adds 2 + 2 to equal 4', () => {
	expect( functions.add( 2, 2 ) ).toBe( 4 );
} );

// not.toBe: Check if the result is not.toBe()
test( 'Adds 2 + 2 to NOT equal 5', () => {
	expect( functions.add( 2, 2 ) ).not.toBe( 5 );
} );

// toBeNull: Check if the value is null
test( 'Should be null', () => {
	expect( functions.isNull() ).toBeNull();
} );

// toBeFalsy: Check if the value is falsy
test( 'Should be falsy', () => {
	expect( functions.checkValue( 0 ) ).toBeFalsy();
} );

// toEquals : Check function's return value as user object
test( 'User should be Imran Sayed object', () => {
	expect( functions.createUser() ).toEqual( { firstName: 'Imran', lastName: 'Sayed' } );
} );

// Less than & Greater than
test( 'Should be under 1600', () => {
	expect( functions.addLoadValues( 600, 900 ) ).toBeLessThan( 1600 );
} );

// Less than & Greater than
test( 'Should be under 1600', () => {
	expect( functions.addLoadValues( 600, 900 ) ).toBeLessThan( 1600 );
} );

// Regex
test( 'There is no I in team', () => {
	expect( functions.displayTeamName( 'Chelsea' ) ).not.toMatch( /I/ );
} );