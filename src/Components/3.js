import React, { useState } from 'react';
import '../App.css';

const employees = [
    { id: 1, firstName: 'Eml1', lastName: '1', salary: 5000 },
    { id: 2, firstName: 'Eml2', lastName: '2', salary: 6000 },
    { id: 3, firstName: 'Eml3', lastName: '3', salary: 6000 },
    { id: 4, firstName: 'Eml4', lastName: '4', salary: 6000 },
    { id: 5, firstName: 'Eml5', lastName: '5', salary: 6000 },
    { id: 6, firstName: 'Eml6', lastName: '6', salary: 6000 },
    { id: 7, firstName: 'Eml7', lastName: '7', salary: 6000 },
    { id: 8, firstName: 'Eml8', lastName: '8', salary: 6000 },
    { id: 9, firstName: 'Eml9', lastName: '9', salary: 6000 },
    { id: 10, firstName: 'Eml10', lastName: '10', salary: 6000 },
    { id: 11, firstName: 'Eml11', lastName: '11', salary: 6000 },
    { id: 12, firstName: 'Eml12', lastName: '12', salary: 6000 },
    { id: 13, firstName: 'Eml13', lastName: '13', salary: 6000 },
    { id: 14, firstName: 'Eml14', lastName: '14', salary: 6000 },
    { id: 15, firstName: 'Eml15', lastName: '15', salary: 6000 },
    { id: 16, firstName: 'Eml16', lastName: '16', salary: 6000 },
    { id: 17, firstName: 'Eml17', lastName: '17', salary: 6000 },
    { id: 18, firstName: 'Eml18', lastName: '18', salary: 6000 },
    { id: 19, firstName: 'Eml19', lastName: '19', salary: 6000 },
    { id: 20, firstName: 'Eml20', lastName: '20', salary: 6000 },
];

const Task_3 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 10;

    // Функція, яка виводить десять працівників на одній сторінці
    const displayEmployees = () => {
        const startIndex = (currentPage - 1) * employeesPerPage;
        const endIndex = startIndex + employeesPerPage;
        const employeesToDisplay = employees.slice(startIndex, endIndex);

        return employeesToDisplay.map(employee => (
            <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
            </tr>
        ));
    };

    // Функція, яка міняє поточну сторінку
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Генерація посилань на сторінки
    const pageLinks = [];
    for (let i = 1; i <= Math.ceil(employees.length / employeesPerPage); i++) {
        pageLinks.push(
            <button key={i} onClick={() => handlePageChange(i)}>
                {i}
            </button>
        );
    }

    return (
        <div className="Tasks">
            <table className="forTable">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>{displayEmployees()}</tbody>
            </table>
            <div>
                {pageLinks}
            </div>
        </div>
    );
};

export default Task_3;
