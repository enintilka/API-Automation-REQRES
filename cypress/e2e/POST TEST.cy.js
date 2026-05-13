describe('Automate and verify POST request new user ',()=>{
    it('Post new user',()=>{
        cy.request({
            method:'Post',
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'},
            body:{"name":"enea",
                  "job" : "QA",
                  "age" : "30"
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq('enea')
            expect(res.body.id).to.exist
            expect(res.body.createdAt).to.exist
            expect(res.body.job).to.eq('QA')
            expect(res.body.age).to.eq('30')
        })
    })
})