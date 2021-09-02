import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const employee = [
  {
    firstName: 'Alan',
    lastName: 'Rayder',
    workHours: 16,
    hourlyWageRate: 10
  },
  {
    firstName: 'Big',
    lastName: 'Smoke',
    workHours: 40,
    hourlyWageRate: 2
  },
  {
    firstName: 'Van',
    lastName: 'Hoenhaim',
    workHours: 5,
    hourlyWageRate: 2
  },
  {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    workHours: 16,
    hourlyWageRate: 10
  }
];

function EmployeeTable() {
  return (
    <table border="1">
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Work Hours</th>
        <th>Hourly wage rate</th>
        <th>Salary</th>
      </tr>
      {employee.map(e => (
        <tr key={e.firstName}>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.workHours}</td>
          <td>{e.hourlyWageRate} $</td>
          <td>{e.workHours * e.hourlyWageRate} $</td>
        </tr>
      ))}
    </table>
  );
}

ReactDOM.render(<EmployeeTable />, document.getElementById('root'));
