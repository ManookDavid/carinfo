import React from 'react'

const Bar = () => {
    return(
       <div>
            <div id='topBar'>
                <div>
                    <img id='src' src='./photos/search.png' width='20px' height='20px'/>
                    <input type="Search" placeholder="Search"/>
                    <button>En</button>
                </div>
            </div>
            <div id='navBar'>
                <div>
                    <p>Want more? Don`t hasitate we are open to answere to all your questions ! ! !</p>
                </div>
                <div>
                    <button>Contact Us</button>
                    <button>About Us</button>
                </div>
            </div>
       </div>
    )
}

export default Bar