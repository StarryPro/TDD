const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');

jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'milk', available: true },
    { item: 'banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // jest 설정에서 clearMocks: false인 경우
    // fetchItems.mockClear()
    // ProductClient.mockClear()
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: 'milk', available: true }]);
    expect(items.length).toBe(1);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
