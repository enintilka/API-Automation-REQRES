describe('Automate and verify POST request new user',()=>{

  it('Post new user',()=>{

    cy.fixture('UserData').then((UserData)=>{

      cy.request({

        method:'POST',

        url:`${Cypress.env('reqresBaseUrl')}/api/users`,

        headers:{
          'x-api-key': Cypress.env('reqresApiKey')
        },

        body: UserData

      }).then((res)=>{

        expect(res.status).to.eq(201)

        expect(res.body.name).to.eq(UserData.name)
        expect(res.body.job).to.eq(UserData.job)
        expect(res.body.age).to.eq(UserData.age)

        expect(res.body.id).to.exist
        expect(res.body.createdAt).to.exist

      })

    })

  })

})