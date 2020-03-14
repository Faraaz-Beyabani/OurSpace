describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('doesnt show listings initially', ()=>{
        cy.visit('/');
        cy.get('[data-cy="listing-0"]').should('not.be.visible')
    })

    it ('clicking button opens modal', ()=>{
        cy.visit("/");
        cy.get("[data-cy=filter-opener]").click();
        cy.get("[data-cy=FilterView]").should("be.visible");
    })
});