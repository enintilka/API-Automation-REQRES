describe('Automate and verify GET request',()=>{
  it('Get user response',()=>{
    cy.request({
      url:'https://reqres.in/api/users?page=1',
      headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'}
    }).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body.total).to.eq(12)
      expect(res.body.data[0].last_name).to.eq('Bluth')
      expect(res.body.data[1].last_name).to.eq('Weaver')
      expect(res.body.data[0].id).to.eq(1)
      expect(res.body.data[1].id).to.eq(2)
      expect(res.body.data[2].last_name).to.eq('Wong')
      expect(res.body.data[2].id).to.eq(3)
    })
  })
})