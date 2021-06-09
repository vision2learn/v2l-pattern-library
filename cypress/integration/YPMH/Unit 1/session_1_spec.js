describe('YPMH: Unit 1 / Session 1 / Page 1', () => {

  let courseDetails = {
    name: "Understanding Children and Young People's Mental Health",
    unitStr: "Unit one",
    unit: 1,
    session: 1,
    page: 1,
    sessionsInUnit: 3,
    pagesInUnit: 5,
    timeTo: "Think"
  };
  
  let url = `/courses/young-peoples-mental-health/unit-${courseDetails.unit}/session-${courseDetails.session}/${courseDetails.page}`;

  it('successfully loads', () => {
    cy.visit(url)
  })

  describe('Header', () => {
    it('displays the correct course title', () => {
      cy.get('.c-main-head__course').should('include.text', courseDetails.name)
    })
  
    it('displays the correct unit title', () => {
      cy.get('.c-main-head__details > span:nth-child(2)').should('include.text', 'Understand Children And Young People\'s Mental Health In Context')
    })
  
    it('has the correct number of sessions (3)', () => {
      cy.get('.c-main-head__sessions').children().should('have.length', courseDetails.sessionsInUnit)
    })
  
    it('highlights current session', () => {
      cy.get('[aria-current="step"]').should('include.text', `Session ${courseDetails.session}`)
    })

    it('highlights current page', () => {
      cy.get('[aria-current="page"]').should('include.text', '1')
    })
  })

  describe('Page has correct sections', () => {
    it('has an <h1> tag with correct text', () => {
      cy.get('h1').should('include.text', `Welcome to ${courseDetails.unitStr}`)
    })
  
    it('has a Unit overview section', () => {
      cy.get('#main > :nth-child(2) > h2')
        .contains('unit overview', { matchCase: false })
    })
  
    it('has a Course features section', () => {
      cy.get('#main > :nth-child(3) > h2')
        .contains('course features', { matchCase: false })
    })
  
    it('has a Submitting assessments section', () => {
      cy.get('#main > :nth-child(4) > h2')
        .contains('submitting assessments', { matchCase: false })
    })
  
    it(`has a Time to ${courseDetails.timeTo} section`, () => {
      cy.get('#main > :nth-child(5) > h2')
        .contains(`time to ${courseDetails.timeTo}`, { matchCase: false })
    })
  })
})
