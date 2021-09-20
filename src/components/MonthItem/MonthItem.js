import { useState } from 'react';

function monthItem({month}) {

    const [alertMonth, setAlertMonth] = useState(false)

    return(
        <>
        <ul>
            <li onClick = {() => alert(month.name)}>{month.name}</li>
        </ul>
        </>
    );
}

export default monthItem;