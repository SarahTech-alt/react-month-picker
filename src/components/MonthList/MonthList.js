import React from 'react';
import MonthItem from '../MonthItem/MonthItem.js'

function MonthList({monthList, getMonth}) {
    console.log(monthList);
    
    return (
        <div className="container">
        {monthList.map(month => (

            <MonthItem
                key={month.id}
                month={month}
                getMonth={getMonth}
                
            />

        ))}

    </div>
    );
}

export default MonthList;