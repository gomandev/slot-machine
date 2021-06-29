
import React from 'react';

import { render} from '@testing-library/react';


import  {Logo} from '@modules/atoms/logo';


describe('Logo component', () => {
        test('should render logo component', () => {
                const  { getByTestId} = render(<Logo />)
                expect(getByTestId('main-logo-cp')).toBeTruthy();
        })
        
})


