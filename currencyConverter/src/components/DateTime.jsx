import React, { useState, useEffect } from 'react';

function DateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const day = currentDateTime.getDate();
    const month = currentDateTime.getMonth() + 1; // Adding 1 to get the correct month
    const year = currentDateTime.getFullYear();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();

    return (
        <>
            <h1 className='text-lg font-semibold'>{`Date: ${day}/${month}/${year}`} | {`Time: ${hours}:${minutes}:${seconds}`}</h1>
        </>
    );
}

export default DateTime;
