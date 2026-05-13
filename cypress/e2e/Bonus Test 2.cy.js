describe('Bonus Task 2 create and verify assertions',()=>{
    it('Create and verify new post user',()=>{
        cy.request({
            method:'Post',
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'},
            body:{"name": "eniko", "job":"QA","age":30}

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.be.a('string')
            expect(res.body.job).to.be.a('string')
            expect(res.body.age).to.be.a('number')
        })
    })
})