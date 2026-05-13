describe('Creat and Verify Assertions ',()=>{
    it('create types of assertions',()=>{
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'}

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.total).to.be.a('number')
            expect(res.body.data[0].id).to.be.a('number')
            expect(res.body.data[0].last_name).to.be.a('string')
        })
    })

})