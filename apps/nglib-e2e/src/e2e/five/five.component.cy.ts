describe('nglib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fivecomponent--primary'));
  it('should render the component', () => {
    cy.get('story-test-five').should('exist');
  });
});
