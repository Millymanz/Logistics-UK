import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import DriverList from './components/DriverList';
import menuData from './data/menu.json';
import driversData from './data/drivers.json';
import './App.css';

function App() {
    const [menuItems, setMenuItems] = useState(menuData.data);
    const [drivers, setDrivers] = useState(driversData.data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch menu items and drivers data as needed
        // setMenuItems(menuData.data);
        // setDrivers(driversData.data);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDrivers = drivers.filter(driver =>
        driver.forename.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.vehicleRegistration.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Menu menuItems={menuItems} />
                </aside>
                <main className="main-content">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search drivers..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <DriverList drivers={filteredDrivers} />
                </main>
            </div>
        </div>
    );
}

export default App;

