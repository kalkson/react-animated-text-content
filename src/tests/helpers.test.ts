import { concatFragments, splitChildrenToFragments } from '../helpers';

const MOCKED_TEXT = 'Some dummy content to animate';

describe('splitChildrenToFragments', () => {
  test('should return proper result', () => {
    const expectedResult = ['Some', 'dummy', 'content', 'to', 'animate'];

    expect(splitChildrenToFragments(MOCKED_TEXT)).toEqual(expectedResult);
  });
});

describe('concatFragment', () => {
  test('should return proper result', () => {
    const result = concatFragments(MOCKED_TEXT);

    expect(result[0]).toEqual('Some');
    expect(result[result.length - 1]).toEqual('animate');

    result.forEach((fragment, index) => {
      if (index % 2 === 1) {
        expect(fragment).toEqual(' ');
      }
    });
  });

  test('should return proper result when type is number', () => {
    const result = concatFragments(2137);

    expect(result[0]).toEqual('2137');
  });
});
