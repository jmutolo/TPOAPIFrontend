import React from 'react';
import './loggedin.css'

const LoggedInComponent = () => {
  // Random data for demonstration
  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
    { name: 'Mike Johnson', email: 'mikejohnson@example.com', phone: '555-555-5555' },
    // Add more data as needed
  ];

  return (
    <div class="panelcontainer">
        <div class="panelwrapper">
            <div><h1>Admin</h1></div>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  );
};

export default LoggedInComponent;
