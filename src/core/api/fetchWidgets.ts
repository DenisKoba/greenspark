import { get } from './index';

export type Widget = {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
};

export const fetchWidgets = (): Promise<Widget[]> => {
  return get<Widget[]>(
    '/v2/016d11e8/product-widgets',
    {},
    'https://api.mocki.io',
  );
};
