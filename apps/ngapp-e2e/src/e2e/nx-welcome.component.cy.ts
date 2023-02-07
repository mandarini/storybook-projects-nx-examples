describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('story-test-nx-welcome').should('exist');
  });
});
