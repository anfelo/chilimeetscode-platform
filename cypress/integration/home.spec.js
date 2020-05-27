describe('Home', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('has the correct title', () => {
		cy.contains('.title', 'Andres Osorio');
	});

	it('has the correct subtitle', () => {
		cy.contains('.subtitle', 'Entrepreneur ● Software Engineer ● Home Barista');
	});
});
