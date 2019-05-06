import React from 'react'
import Label from 'emerald-ui/lib/Label';
import Progressbar from 'emerald-ui/lib/Progressbar';


const validateCourse = (validation) => {
    let label;
    let progress;
    if (!validation) return;

    if (Object.keys(validation).length === 0) {
        label = <Label style={{ marginRight: '10px' }} color="danger"> No Valido</Label>
        progress = <Progressbar progress={0} color="danger" circle style={{ marginBottom: '10px' }} />
    }
    else if (validation.valid) {
        console.log(validation.percentaje);

        label = <Label color="success">Cumpliendo</Label>
        progress = <Progressbar progress={50} color="success" circle style={{ marginBottom: '10px' }} />
    }
    else {
        label = <Label color="danger">No Cumpliendo</Label>
        progress = <Progressbar progress={validation.percentaje} color="danger" circle style={{ marginBottom: '10px' }} />
    }
    return (
        <div>

            <div className="validation">
                Programa Labor Docente : {label}
            </div>
            <div className="validation">{progress}</div>
        </div>
    );

}


const Header = (props) => {
    return (
        <div>
            <h1>{props.course.fullname}</h1>
            <h3>{props.course.shortname}</h3>
            {validateCourse(props.course.validation)}
            <Progressbar color="success" progress={25} />
        </div>
    )
}


export default Header;