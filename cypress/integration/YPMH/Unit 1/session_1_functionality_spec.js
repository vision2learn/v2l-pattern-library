describe('YPMH: Unit 1 / Session 1 / Page 1 (Functionality)', () => {

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

  describe('Unit overview tabs', () => {
    it(`should have ${courseDetails.sessionsInUnit} items`, () => {
      cy.get('.l-btn-group').children().should('have.lengthOf', courseDetails.sessionsInUnit)
    })
  
    it('should have role="tablist"', () => {
      cy.get('.l-btn-group').should('have.attr', 'role', 'tablist')
    })
  
    it('should only display the first tab', () => {
      cy.get('#section1').should('be.visible')
    })
  
    it('should not display the other tabs', () => {
      cy.get('[role="tabpanel"]:nth-of-type(2)').should('not.be.visible')
    })
  
    it('should not display the other tabs', () => {
      cy.get('[role="tabpanel"]:nth-of-type(3)').should('not.be.visible')
    })
    
    describe('display tab 3 when button 3 is clicked', () => {
      it('selects button 3', () => {
        cy.get('[href="#section3"]').click()
          .should('have.attr', 'aria-selected', 'true')
      })
  
      it('display tab 3', () => {
        cy.get('#section3').should('be.visible')
      })  
    })
  })  
  
  describe('Course features', () => {
    it('should have 9 items', () => {
      cy.get('.l-icon-grid').children().should('have.lengthOf', 9)
    })
  
    it('should not display hidden content', () => {
      cy.get('.c-reveal-block__desc').should('have.attr', 'aria-hidden', 'true')
    })
  
    it('should display hidden content when clicked', () => {
      cy.get('.c-reveal-block > button')
        .should('have.attr', 'aria-expanded', 'false')
        .click({multiple: true})
        .should('have.attr', 'aria-expanded', 'true')
    })

    it('should close content when clicked', () => {
      cy.get('.js-close-btn')
        .click({multiple: true})

      cy.get('.c-reveal-block__desc')
        .should('have.attr', 'aria-hidden', 'true')
    })
  })
})
