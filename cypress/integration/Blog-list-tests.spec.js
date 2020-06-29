describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');


    cy.visit('http://localhost:3000');
  });

  it('should show the logging form when visiting the page without a log in.', function() {
    cy.contains('Login');
    cy.contains('submit');
  });

  describe('Login', function() {
    it('should successfully log in with correct credentials', function() {

    });

    it('should fail with incorrect credentials', function() {

    });
  });
});