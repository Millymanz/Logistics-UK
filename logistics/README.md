# Logistics UK Application
## Overview
This React application displays a list of drivers and menu items, extracted from relevant data files. It showcases the use of React components to create an interactive and dynamic web interface.

## Features
Header Bar: Displays the Logistics UK logo.

Menu: Menu items are shown on the left-hand side of the page, sourced from data/menu.json.

Driver Listing: In the main content area, there is a list of drivers displaying their names, vehicle registration, and the total minutes spent on activities for the week (1/2/2021 – 7/2/2021).

Activity Tracker: Each driver's daily activities are represented by colored boxes - green if there's activity for the day, clear otherwise. Data is sourced from data/drivers.json.

## Bonus Features
Search Functionality: A search box allows users to filter the driver list based on matching names or vehicle registrations.
Activity Time Breakdown: Total activity time is split into groups by individual activity types (drive, rest, etc.).
Routing: The application includes routing with placeholder pages for each menu item.

## Installation and Setup

### Install Dependencies:
npm install

Start the Application:
npm start


## Project Structure

- `public/`: Contains the `index.html` file and assets like images.
- `src/`: Source files for the application.
  - `components/`: Reusable components like `Header`, `Menu`, `DriverList`, etc.
  - `data/`: Data files like `menu.json` and `drivers.json`.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
