import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const MechanicAvailableStatusTable = () => {
  const [mechanicAvailablelist, setMechanicAvailableList] = useState([
    {
      id: '1',
      mechanicID: 'Mec-001',
      mechanicName: 'Matt Dickerson',
      status: 'Available',
    },
  ]);

  const handleAssign = (id) => {
    console.log(`Assigning mechanic with ID: ${id}`);
  };

  const columns = [
    {
      name: 'Mechanic ID',
      selector: (row) => row.mechanicID,
      sortable: true,
    },
    {
      name: 'Mechanic Name',
      selector: (row) => row.mechanicName,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <span className={row.status === 'Available' ? 'badge bg-success rounded-pill' : 'badge bg-warning rounded-pill'}>
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <button onClick={() => handleAssign(row.id)} className="btn btn-primary">
          Assign
        </button>
      ),
      sortable: true,
    },
  ];

  return <DataTable columns={columns} data={mechanicAvailablelist} pagination />;
};

export default MechanicAvailableStatusTable;
