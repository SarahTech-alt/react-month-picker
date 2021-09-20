import React from 'react';
import MonthItem from '../MonthItem/MonthItem.js'

function MonthList({monthList}) {
    console.log(monthList);
    
    return (
        <>
       {/* mapping through the array 
       and passing the result to MonthItem component  
       MonthItem will be put here from the import
       and passed to App.js from another import on App.js */}
        {monthList.map(month => (
            <ul>
            <MonthItem
                key={month.id}
                month={month}
            />
            </ul>
        ))}

    </>
    );
}

export default MonthList;