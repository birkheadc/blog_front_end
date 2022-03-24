import React from 'react';
import { render, screen } from '@testing-library/react';
import BackForwardLinks from './backForwardLinks';
import { unmountComponentAtNode } from 'react-dom';

test('renders and unmounts without crashing', () => {
    const div = document.createElement('div');
    render(<BackForwardLinks />, div);
    unmountComponentAtNode(div);
});