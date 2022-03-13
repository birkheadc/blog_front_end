import React from 'react';
import { render, screen } from '@testing-library/react';
import Feed from './feed';
import { unmountComponentAtNode } from 'react-dom';

test('renders and unmounts without crashing', () => {
    const div = document.createElement('div');
    render(<Feed />, div);
    unmountComponentAtNode(div);
});