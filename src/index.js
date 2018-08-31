import React from 'react'
import ReacDOM from 'react-dom'

import Dad from './components/Dad'
import Children from './components/ Children'

ReacDOM.render(
    <div>
        <Dad name="Armando" lastName="Azevedo">
            <Children name="Amanda" />
            <Children name="Alícia" />
        </Dad>
    </div>
, document.getElementById('root'))