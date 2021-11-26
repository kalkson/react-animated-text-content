import { render, getByTestId, screen } from '@testing-library/react';
import React from 'react';
import AnimationText from '../index';

const MOCKED_CHILDREN = 'Lorem ipsum';

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('AnimatedText', () => {
  test('should render', () => {
    const { container } = render(
      <AnimationText>{MOCKED_CHILDREN}</AnimationText>
    );

    expect(screen.getByTestId('animated-text')).toContainEqual('Lorem');
    expect(screen.getByTestId('animated-text')).toContain('ipsum');
  });
});
