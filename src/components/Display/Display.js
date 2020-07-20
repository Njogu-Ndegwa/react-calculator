import React from 'react';
import PropTypes from 'prop-types';

const Display = ({displayValue}) => (
    <div className="display-container">
    <p className="display-value" >
        {displayValue}
    </p>
</div>
)

Display.proptypes = {displayValue: PropTypes.string.isRequired};

export default Display