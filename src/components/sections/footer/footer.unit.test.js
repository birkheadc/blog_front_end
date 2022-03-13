import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { unmountComponentAtNode } from 'react-dom';

test('renders and unmounts without crashing', () => {
    const div = document.createElement('div');
    render(<Footer />, div);
    unmountComponentAtNode(div);
});