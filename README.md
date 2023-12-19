# Specifix Task

This is a web application built with Next.js, Sass, and TypeScript. It includes features such as a login page, a main page, and a list of patients with individual patient information.

## Table of contents

- Project Structure
- Usage
- General info
- Technologies
- Prerequisites
- Installation and Runnning
- Future Developments

## Project Structure

- **/components**: React components used throughout the application.
- **/pages**: Next.js pages, representing different routes of the application.
- **/public**: Public assets and static files.
- **/styles**: Global style releated files.

## Usage

1. **Login**

- Navigate to the login page (`/login`) and enter your credentials to log in.

2. **Main Page**

- The main page (`/mainpage`) displays a list of patients. Click on a patient's name to view detailed information.

3. **Patient Details**

- The patient details page displays information about the selected patient, including address, age, blood type, email, gender, and phone.

## General info

This web application is designed for surgeons to streamline patient management. With a login page, surgeons can access the app, using a static username/password for demo purposes.

Once logged in, users are greeted with an organized layout featuring a header, sidebar, and main content area.

The main view presents a comprehensive list of patients (cases), providing a clear overview. By clicking on a specific patient, surgeons are directed to a detailed view, showing patient information along a **.stl** file viewer. Patient data can be easily managed, either hardcoded within the source code or dynamically retrieved from external sources, offering flexibility in data management.

## Technologies

Project is created with:

- Next.js (14)
- Mockoon

## Prerequisites

At first, Node environment should be installed on your machine.

### Installation and Runnning

**1. Clone the repository: \*\***git clone `https://github.com/Sakneb/Spesifix-task`\*\*

2. Install dependencies **yarn**
3. Run **`yarn run build`** to build the project
4. Run **`yarn run dev`** to start the server

### Future Developments

**1.User Profiles and Customization:**

- Create individual user profiles to allow surgeons to customize their experience.
- Implement user preferences, such as theme selection or dashboard layout customization.

**2.Advanced Search and Filters:**

- Implement advanced search and filtering options for the list of patients. Allow surgeons to quickly find specific patients based on criteria such as name, age, or medical condition.

**3.Interactive `.stl` Viewer:**

- Add interactivity to the **.stl** viewer, allowing surgeons to manipulate and interact with 3D models.

**4. Enhanced User Interface (UI):**

- Invest time in refining the user interface for an optimal user experience. Consider modern design principles, responsive layouts, and intuitive navigation to make the application visually appealing and user-friendly.

**5.Feedback Mechanism:**

- Incorporate a feedback mechanism to gather user insights and improve the user experience continually.

**6.Analytics and Reporting:**

- Track how users, particularly surgeons, interact with the website. This includes monitoring which features are most frequently used, common navigation paths, and time spent on different sections.
