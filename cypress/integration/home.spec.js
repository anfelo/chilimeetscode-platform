describe('Home', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('has a menu', () => {
		cy.contains('.menu-list', 'Courses', 'Posts', 'Login');
	});
});
