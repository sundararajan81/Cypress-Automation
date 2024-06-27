describe ('test1',  ()=> {
    it('GET CALL', ()=> {
        cy.request('GET','https://postman-echo.com/get?foo1=bar1&foo2=bar3')
        .its('status')
        .should('equal',200);
    })
})