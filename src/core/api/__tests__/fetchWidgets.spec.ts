import { fetchWidgets } from '../fetchWidgets';
import { get } from '../index';

jest.mock('../index', () => ({
  get: jest.fn(),
}));

describe('fetchWidgets function', () => {
  it('should call get with correct arguments', async () => {
    await fetchWidgets();
    expect(get).toHaveBeenCalledWith(
      '/v2/016d11e8/product-widgets',
      {},
      'https://api.mocki.io',
    );
  });

  it('should return data from get function', async () => {
    const mockWidgets = [
      {
        id: 1,
        type: 'Test',
        amount: 10,
        action: 'Test Action',
        active: true,
        linked: false,
        selectedColor: '#000',
      },
    ];
    (get as jest.Mock).mockResolvedValueOnce(mockWidgets);
    const widgets = await fetchWidgets();
    expect(widgets).toEqual(mockWidgets);
  });

  it('should throw an error if get function rejects', async () => {
    const errorMessage = 'Failed to fetch widgets';
    (get as jest.Mock).mockRejectedValueOnce(errorMessage);
    await expect(fetchWidgets()).rejects.toEqual(errorMessage);
  });
});
