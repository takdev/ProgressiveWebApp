describe(’with a 320x568 viewport’, function() { 
  beforeEach(function() { 
     cy.visit(’https://pwa.domain.com’); 
     cy.viewport(320, 568); 
  }); 
  it(‘should display the toggle button’, () => { 
   cy.get(’#menu-toggle’).should(’exist’); 
  }); 
}); 