describe('Login', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('.login-button').click();
	});

	it('navigates to login', () => {
		cy.contains('Sign In with Email');
	});

	it('has correct sign in or create account button', () => {
		cy.contains('.modal-card-foot .button', 'Login', 'Continue Anonymously');
	});
});
