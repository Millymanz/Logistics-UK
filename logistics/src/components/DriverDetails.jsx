

function DriverDetails({ driver }) {
    const totalDuration = driver.traces.reduce((acc, trace) => (
        acc + trace.activity.reduce((activityAcc, activity) => activityAcc + activity.duration, 0)
    ), 0);

    const workedOnDay = (day) => {
        return driver.traces.some(trace => {
            const traceDate = new Date(trace.date);
            return traceDate.getDay() === day;
        });
    };

    const renderDayBoxes = () => {
        
        const days = [1, 2, 3, 4, 5, 6, 0];
        return days.map(day => (
            <td key={day} className={workedOnDay(day) ? 'worked' : ''}></td>
        ));
    };

    return (
        <tr>
            <td>{driver.forename} {driver.surname}</td>
            <td>{driver.vehicleRegistration}</td>
            <td>{totalDuration} minutes</td>
            {renderDayBoxes()}
        </tr>
    );
}

export default DriverDetails;
