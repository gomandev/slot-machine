import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from '@modules/atoms/button';

describe('Button Component', () => {
  const onClick = jest.fn();

  test('should Render Button', () => {
    const { getByTestId } = render(
      <Button variant="fill-primary" onClick={onClick}>
        Click me
      </Button>,
    );
    const elem = getByTestId('main-button-cp');

    expect(elem).toBeInTheDocument();
    expect(elem.classList.contains('bg-ui-purple')).toBeTruthy();
  });

  test('should Test Button onclick function', () => {
    const { getByTestId } = render(
      <Button variant="fill-primary" onClick={onClick}>
        Click me
      </Button>,
    );
    const elem = getByTestId('main-button-cp');

    fireEvent.click(elem);

    expect(onClick).toBeCalledTimes(1);
  });
});
