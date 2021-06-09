describe('Unit 1 Session 1 Page 2', () => {
  it('successfully loads', () => {
    cy.visit('/courses/young-peoples-mental-health/unit-1/session-1/2')
  })

  
  describe('Page has correct sections', () => {
    it('has an <h1> tag with correct text', () => {
      cy.get('h1').should('include.text', 'Your learning goals')
    })
    
    it('has "Your learning goals" section', () => {
      cy.get('#main > :nth-child(2) > h2')
        .contains('your learning goals', { matchCase: false })
    })
    
    it('has "What you will learn" section', () => {
      cy.get('#main > :nth-child(3) > h2')
        .contains('what you will learn', { matchCase: false })
    })
    
    it('has "Why study..?" section', () => {
      cy.get('#main > :nth-child(4) > h2')
        .contains('why study', { matchCase: false })
    })
    
    it('has "Goal Setting" section', () => {
      cy.get('#main > :nth-child(5) > h2')
        .contains('goal setting', { matchCase: false })
    })
    
    it('has "Hints and Tips" section', () => {
      cy.get('#main > :nth-child(6) > h2')
        .contains('hints and tips', { matchCase: false })
    })
  })
  
  describe('Learning Outcomes', () => {
    it('opens learning outcomes PDF', () => {
      let href;

      cy.get('#main > :nth-child(2)')
        .find('a')
        .then(($link) => {
          href = $link.attr('href')
        })
        .click()

      cy.get('body')
        .find('.c-overlay')
        .find('iframe')
        .should(($iframe) => {
          let iframeSrc = $iframe.attr('src');
          expect(iframeSrc).to.include(href)
        })
        .parent()
        .find('button')
        .click()
    })
  }) 
})
