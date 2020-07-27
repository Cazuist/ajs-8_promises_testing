import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Мокаем функцию read" ', () => {
  // eslint-disable-next-line consistent-return
  test('Должен вернуть сообщение об ошибке промиса.', async () => {
    read.mockImplementation(async () => {
      throw new Error('Promise rejected!');
    });

    try {
      await read();
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Test failed');
    } catch (error) {
      expect(error.message).toEqual('Promise rejected!');
    }
  });
});

describe('Мокаем функцию read" ', () => {
  // eslint-disable-next-line consistent-return
  test('Должен вернуть сообщение о разрешении промиса.', async () => {
    read.mockImplementation(async () => Promise.resolve('Promise resolved!'));

    try {
      await expect(read()).resolves.toBe('Promise resolved!');
    } catch (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Test failed');
    }
  });
});
