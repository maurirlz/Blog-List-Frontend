describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.request('POST', 'http://localhost:3001/api/users', {
      username: 'maurirlz',
      password: 'rootroot',
      name: 'Mauricio Benitez',
    });

    cy.visit('http://localhost:3000');
  });

  it('should show the logging form when visiting the page without a log in.', function () {
    cy.contains('Login');
  });

  describe('Login', function () {
    it('should successfully log in with correct credentials', function () {
      cy.contains('Login');
      cy.login({
        username: 'maurirlz',
        password: 'rootroot',
      });

      cy.visit('http://localhost:3000');

      cy.contains('Create a Blog');
    });

    it('should fail with incorrect credentials', function () {
      cy.get('#usernameInput').type('maurirlz');
      cy.get('#passwordInput').type('wrong password');
      cy.get('#formButton').click();

      cy.get('#loginError').contains('Invalid');
    });
  });

  describe('When a user is logged in', function () {
    beforeEach(function () {
      cy.login({
        username: 'maurirlz',
        password: 'rootroot',
      });
    });

    it('user should be able to create a blog', function () {
      cy.createBlog({
        title: 'Blog created by Cypress.',
        author: 'Cypress, who else?',
        url: 'http://cypress.io',
      });

      cy.contains('Blog created by Cypress.');
    });

    describe('And many blogs exists', function() {
      beforeEach(function() {
        cy.createBlog({
          title: 'Blog number 1 by Cypress.',
          author: 'Cypress, who else?',
          url: 'http://cypress.io',
        });
        cy.createBlog({
          title: 'Blog number 2 by Cypress.',
          author: 'Cypress, who else?',
          url: 'http://cypress.io',
        });
        cy.createBlog({
          title: 'Blog number 3 by Cypress.',
          author: 'Cypress, who else?',
          url: 'http://cypress.io',
        });
      });

      it('any of them can be liked', function() {
        cy.contains('Blog number 2 by Cypress.').parent().find('button').as('viewBlog');
        cy.get('@viewBlog').click();
        cy.contains('Like').click();

        cy.visit('http://localhost:3000');
        cy.get('@viewBlog').click();
        cy.contains('Total Likes: 1');

      });
    });
  });
});
