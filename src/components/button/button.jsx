import React from 'react';
import './button.css'

function Button({label}) {
    return(
        <div className='button-style' data-testid="button">
            {label}
        </div>
    );
}

export default Button;