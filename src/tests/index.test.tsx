import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import AnimatedText from '../index';

const MOCKED_CHILDREN = 'Lorem ipsum';
const MOCKED_CHILDREN_LONGER = 'Lorem ipsum dolor amet';

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn((): any => ({
  observe,
  unobserve,
}));

describe('AnimatedText', () => {
  test('should render', () => {
    const { getByTestId } = render(
      <AnimatedText>{MOCKED_CHILDREN}</AnimatedText>
    );

    expect(getByTestId('animated-text')).toBeInTheDocument();
    expect(getByTestId('animated-text').textContent).toBe(MOCKED_CHILDREN);
  });

  test('should have proper array length', () => {
    const { getByTestId } = render(
      <AnimatedText>{MOCKED_CHILDREN}</AnimatedText>
    );

    expect(Array.from(getByTestId('animated-text').children).length).toEqual(
      MOCKED_CHILDREN.split(' ').length
    );
  });

  test('should intersection observer observe an element', () => {
    render(<AnimatedText>{MOCKED_CHILDREN}</AnimatedText>);

    expect(IntersectionObserver().observe.mock.calls.length).toBeGreaterThan(0);
  });

  test('should elements have proper interval', () => {
    const MOCKED_INTERVAL = 1;
    const MOCKED_TEXT = 'Some dummy text content to animate';

    const { getByTestId } = render(
      <AnimatedText interval={MOCKED_INTERVAL}>{MOCKED_TEXT}</AnimatedText>
    );

    const { children } = getByTestId('animated-text');

    MOCKED_TEXT.split(' ').forEach((fragment, index) => {
      expect(children[index]).toHaveStyle(
        `animation-delay: ${index * MOCKED_INTERVAL}s;`
      );
    });
  });

  test('should has proper children count depending on includeWhiteSpaces: true and type: chars props', () => {
    const { getByTestId } = render(
      <AnimatedText type="chars" includeWhiteSpaces>
        {MOCKED_CHILDREN_LONGER}
      </AnimatedText>
    );

    expect(
      getByTestId('animated-text').children[0].children[0].textContent
    ).toEqual('L');
    expect(getByTestId('animated-text').children[1].textContent).toEqual(
      '\xa0'
    );
  });

  test('should has proper children count depending on includeWhiteSpaces: false and type: cahrs props', () => {
    const { getByTestId } = render(
      <AnimatedText type="words">{MOCKED_CHILDREN_LONGER}</AnimatedText>
    );

    expect(getByTestId('animated-text').children[0].textContent).toEqual(
      'Lorem'
    );
    expect(getByTestId('animated-text').children[1].textContent).toEqual(
      'ipsum'
    );
  });

  test('should children have proper animations', () => {
    const { getByTestId } = render(
      <AnimatedText
        type="words"
        animation={{
          x: '200px',
          y: '100px',
          scale: 3,
          ease: 'linear',
          duration: 0.5,
        }}
      >
        {MOCKED_CHILDREN_LONGER}
      </AnimatedText>
    );

    expect(getByTestId('animated-text').children[0]).toHaveStyle(
      'animation: 0.5s linear forwards'
    );
  });

  test('should not render when incorrect children type', () => {
    const { getByTestId } = render(
      <AnimatedText>
        {MOCKED_CHILDREN_LONGER}
        <span>asf</span>
      </AnimatedText>
    );

    expect(getByTestId('animated-text').textContent).toBe('');
    expect(getByTestId('animated-text').children.length).toEqual(0);
  });
});
