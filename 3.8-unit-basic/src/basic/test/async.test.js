const fetchProduct = require('../async.js')

describe('Async',() => {
  // done을 사용하면 테스트 시간 소모가 큼
  it('async-done', (done)=> {
    fetchProduct().then((item)=> {
      expect(item).toEqual({item: 'Milk', price: 200})
      done()
    })
  }) 

  it('async-return', ()=> {
    return fetchProduct().then((item)=> {
      expect(item).toEqual({item: 'Milk', price: 200})
    })
  })

  it('async-await', async()=> {
    const product = await fetchProduct()
    expect(product).toEqual({item: 'Milk', price: 200})
  }) 

  it('async-resolves', async()=> {
  return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 200})
  })

  it('async-reject', async()=> {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  }) 
})