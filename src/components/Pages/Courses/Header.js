import React from 'react'



const Header = (props) => {
    console.log('course',props.course);
    return (
        <div>
            <h2>{props.course.name}</h2>
        </div>
    )
}


export default Header;