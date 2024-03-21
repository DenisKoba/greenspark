import 'jest-extended';

declare global {
  interface Window {
    fetch: {
      close: () => void;
    };
    location: {};
  }
}
