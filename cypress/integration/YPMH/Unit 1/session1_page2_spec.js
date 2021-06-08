/// <reference types="cypress" />

describe('Unit 1 Session 1 Page 2', () => {
  it('successfully loads', () => {
    cy.visit('/courses/young-peoples-mental-health/unit-1/session-1/2')
  })

  
  describe('Page has correct sections', () => {
    it('has an <h1> tag with correct text', () => {
      cy.get('h1').should('include.text', 'Your learning goals')
    })
    
    it('has "Your learning goals" section', () => {
      cy.get('section:nth-of-type(2) > h2')
        .contains('your learning goals', { matchCase: false })
    })
    
    it('has "What you will learn" section', () => {
      cy.get('section:nth-of-type(3) > h2')
        .contains('what you will learn', { matchCase: false })
    })
    
    it('has "Why study..?" section', () => {
      cy.get('section:nth-of-type(4) > h2')
        .contains('why study', { matchCase: false })
    })
    
    it('has "Goal Setting" section', () => {
      cy.get('section:nth-of-type(5) > h2')
        .contains('goal setting', { matchCase: false })
    })
    
    it('has "Hints and Tips" section', () => {
      cy.get('section:nth-of-type(6) > h2')
        .contains('hints and tips', { matchCase: false })
    })
  })
  
  describe('Learning Outcomes', () => {
    it('opens learning outcomes PDF', () => {
      cy.contains('view the complete set of learning outcomes for this unit', { matchCase: false })
      .click()
      // .wait(7000) // ADD THIS IN DEMO
      
      // Get the URL
      
      cy.get('body')
      .find('.c-overlay')
      .find('button')
      .click()
      
      // compare the URL above with iframe src
    })
    // it('should have 3 items', () => {
      //   cy.get('.l-btn-group').children().should('have.lengthOf', 3)
      // })
      
      // it('should have role="tablist"', () => {
        //   cy.get('.l-btn-group').should('have.attr', 'role', 'tablist')
        // })
        
        // it('should only display the first tab', () => {
          //   cy.get('#section1').should('be.visible')
          // })
          
          // it('should not display the other tabs', () => {
            //   cy.get('[role="tabpanel"]:nth-of-type(2)').should('not.be.visible')
            // })
            
            // it('should not display the other tabs', () => {
              //   cy.get('[role="tabpanel"]:nth-of-type(3)').should('not.be.visible')
              // })
              
              // describe('display tab 3 when button 3 is clicked', () => {
                //   it('selects button 3', () => {
                  //     cy.get('[href="#section3"]').click()
                  //       .should('have.attr', 'aria-selected', 'true')
                  //   })
                  
                  //   it('display tab 3', () => {
                    //     cy.get('#section3').should('be.visible')
                    //   })  
                    // })
  })  
                  
  describe('Hints and Tips', () => {
    //   it('should have 9 items', () => {
      //     cy.get('.l-icon-grid').children().should('have.lengthOf', 9)
      //   })
      
      //   it('should not display hidden content', () => {
        //     cy.get('.c-reveal-block__desc').should('have.attr', 'aria-hidden', 'true')
        //   })
        
        //   it('should display hidden content when clicked', () => {
          //     cy.get('.c-reveal-block > button')
          //       .should('have.attr', 'aria-expanded', 'false')
          //       .click({multiple: true})
          //       .should('have.attr', 'aria-expanded', 'true')
          //   })
  })
})
                      
// describe('Header', () => {
  // it('displays the correct course title', () => {
  //   cy.get('.c-main-head__course').should('include.text', 'Understanding Children and Young People\'s Mental Health')
  // })

  // it('displays the correct unit title', () => {
  //   cy.get('.c-main-head__details > span:nth-child(2)').should('include.text', 'Understand Children And Young People\'s Mental Health In Context')
  // })

  // it('has the correct number of sessions (3)', () => {
  //   cy.get('.c-main-head__sessions').children().should('have.length', 3)
  // })

  // it('highlights current session', () => {
  //   cy.get('[aria-current="step"]').should('include.text', 'Session 1')
  // })

  // it('highlights current page', () => {
  //   cy.get('[aria-current="page"]').should('include.text', '1')
  // })
// })
