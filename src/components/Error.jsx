import React from 'react'
import { PropTypes } from 'prop-types';

const Error = ({msm}) => {
    return ( 
        <p className='alert alert-danger error '>{msm}</p>
     );
};

Error.prototype = {
    msm: PropTypes.string.isRequired
}

 
export default Error;