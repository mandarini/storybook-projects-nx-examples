describe('rlw1: Rlw1 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rlw1--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Rlw1!');
    });
});
