import React from 'react'



const Header = (props) => {
    return (
        <div>
            <h1>{props.course.fullname}</h1>
            <h3>{props.course.shortname}</h3>
        </div>
    )
}


export default Header;