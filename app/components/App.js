import React from 'react'
import Cars from './Cars'
import Bar from './Bar'

const App = () => {
    return(
        <div id='all'>
            <div id='view'>
                <Bar/>
                <div id='title'>
                    <h1>Free full information about your car</h1>
                </div>
                <Cars/>
            </div>
            <div id='bottom'>
                <div>
                    <img src="./photos/copyright.png" width='15px'/>
                    <p>2019 All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default App