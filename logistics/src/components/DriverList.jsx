
import DriverDetails from './DriverDetails';

function DriverList({ drivers }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Driver Name</th>
                    <th>Vehicle Registration</th>
                    <th>Total Activity Duration (minutes)</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
            </thead>
            <tbody>
                {drivers.map(driver => (
                    <DriverDetails key={driver.driverID} driver={driver} />
                ))}
            </tbody>
        </table>
    );
}

export default DriverList;
