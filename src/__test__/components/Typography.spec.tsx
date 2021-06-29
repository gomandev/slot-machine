import React from 'react';

import { render } from '@testing-library/react';

import { Typography, GenericTypographyProps } from '@modules/atoms/typography';

describe('Typography Component', () => {
  test('should Render component', () => {
    const { getByTestId } = render(
      <Typography variant="h1" color="primary">
        Heading
      </Typography>,
    );

    const elem = getByTestId('main-typo-cp');
    expect(elem).toBeInTheDocument();
    expect(elem.classList.contains('text-main-red')).toBeTruthy();
  });
});
