import React from 'react'
import ShowMore from 'emerald-ui/lib/ShowMore';
import {Table, Button, TableHeader, ExpansionTableRow, ExpansionTableRowGroup }  from 'emerald-ui/lib';



const weeksrender = (weeks) => {
     if (!weeks) return;

    return weeks.map(week => (
        <li key={`week-${week.id}`}>
                <b>{week.name}</b><br></br>
            
                {week.summary}
               
        </li>
    ))
    }

const Detail = (props) => {
    console.log(props.course.weeks);
    
    return (
        <div>
            <h3>Weeks</h3>
            <ul>
            <ShowMore toggle show={2}>
            {weeksrender(props.course.weeks)}
            </ShowMore>
            
            </ul>
        </div>
    )
}


export default Detail;