import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button';
import { unmountComponentAtNode } from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Button />, div);
    unmountComponentAtNode(div);
});

it('renders button correctly', () => {
    const label = 'click';
    const {getByTestId} = render(<Button label={label} />);
    expect(getByTestId('button')).toHaveTextContent(label);
});