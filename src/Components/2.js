import React, { useState } from 'react'
import '../App.css';

const Task_2 = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        salary: "",
        gender: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setNewEmployee({ ...newEmployee, gender: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmployees([...employees, newEmployee]);
        setNewEmployee({ firstName: "", lastName: "", salary: "", gender: "" });
    };

    return (
        <div className="Tasks" style={{ border: '1px solid black' } }>
            <table className="forTable">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Salary</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit} className="forForm">
                <label>
                    Firstname:
                    <input
                        type="text"
                        name="firstName"
                        value={newEmployee.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Lastname:
                    <input
                        type="text"
                        name="lastName"
                        value={newEmployee.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Salary:
                    <input
                        type="text"
                        name="salary"
                        value={newEmployee.salary}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={newEmployee.gender}
                        onChange={handleSelectChange}
                    >
                        <option value="">--Select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}

export default Task_2;