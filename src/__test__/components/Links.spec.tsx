import React from 'react';

import { render } from '@testing-library/react';

import { Link } from '@modules/atoms/Link';

describe('Link component', () => {
  it('should render Link ', () => {
    const { getByTestId } = render(
      <Link to="/" variant="primary">
        click me
      </Link>,
    );

    const elem = getByTestId('main-link-cp');

    expect(elem).toBeTruthy();
    expect(elem.classList.contains('text-main-red')).toBeTruthy();
  });
});
