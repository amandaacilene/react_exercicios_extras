import React from 'react'

import { childrenWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>{props.name} {props.lastName}</h1>
        <h2>Children</h2>
        <ul>
            { childrenWithProps(props) }
        </ul>
    </div>