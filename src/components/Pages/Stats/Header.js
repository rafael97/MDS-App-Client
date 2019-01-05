import React from 'react'



const Header = (props) => {
    console.log('course',props.course);
    return (
        <div>
            <h2>{props.course.fullname}</h2>
        </div>
    )
}


export default Header;