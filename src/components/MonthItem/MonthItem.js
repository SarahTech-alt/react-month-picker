

function monthItem({ month }) {

// Making a list item in an ordered list for each
// item in monthList array

    return (
        <>
            <ul>
                <li onClick={() => alert(month.name)}>{month.name}</li>
            </ul>
        </>
    );
}

export default monthItem;