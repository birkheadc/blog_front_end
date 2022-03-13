import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';
import { unmountComponentAtNode } from 'react-dom';

test('renders and unmounts without crashing', () => {
    const div = document.createElement('div');
    render(<Navbar />, div);
    unmountComponentAtNode(div);
});