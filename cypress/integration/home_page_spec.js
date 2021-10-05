describe('The YPMH Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/courses/young-peoples-mental-health/unit-1/session-1/1')
  })

  describe('Header', () => {
    it('displays the correct course title', () => {
      cy.get('.c-main-head__course').should('include.text', 'Understanding Children and Young People\'s Mental Health')
    })
  
    it('displays the correct unit title', () => {
      cy.get('.c-main-head__details > span:nth-child(2)').should('include.text', 'Understand Children And Young People\'s Mental Health In Context')
    })
  
    it('has the correct number of sessions (3)', () => {
      cy.get('.c-main-head__sessions').children().should('have.length', 3)
    })
  
    it('highlights current session', () => {
      cy.get('[aria-current="step"]').should('include.text', 'Session 1')
    })

    it('highlights current page', () => {
      cy.get('[aria-current="page"]').should('include.text', '1')
    })
  })

  describe('Page has correct sections', () => {
    it('has an <h1> tag with correct text', () => {
      cy.get('h1').should('include.text', 'Welcome to')
    })
  
    it('has a Unit overview section', () => {
      cy.get('section#unit-overview')
    })
  
    it('has a Course feature section', () => {
      cy.contains('course features', {matchCase: false })
    })
  
    it('has a Submitting assessments section', () => {
      cy.contains('submitting assessments', {matchCase: false })
    })
  
    it('has a Time to think section', () => {
      cy.contains('time to think', {matchCase: false })
    })
  })
})
