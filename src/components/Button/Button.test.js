import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { Button } from './Button';

describe('Button', () => {
    test('should call onClick callback when clicked', () => {
        const handleClick = jest.fn();
        const buttonText = 'Click Me';
        const { getByText } = render(
            <Button onClick={handleClick}>{buttonText}</Button>
        );
        fireEvent.click(getByText(buttonText));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
