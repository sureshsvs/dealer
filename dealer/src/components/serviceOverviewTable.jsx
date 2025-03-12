import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const ServiceOverviewTable = () => {
  const [serviceOverview, setServiceOverview] = useState([
    {
      customerID: 'KA03MZ0734',
      customerName: 'Matt Dickerson',
      date: '20/2/2025',
      mechanicName: 'Steve Jobs',
      assignwork: '02',
      status: 'Delivered',
    },
  ]);

  const columns = [
    {
      name: 'Customer ID',
      selector: (row) => row.customerID,
      sortable: true,
    },
    {
      name: 'Customer Name',
      selector: (row) => row.customerName,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Mechanic Name',
      selector: (row) => row.mechanicName,
      sortable: true,
    },
    {
      name: 'Assigned Work',
      selector: (row) => row.assignwork,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <span className={row.status === 'Delivered' ? 'badge bg-success rounded-pill' : 'badge bg-warning rounded-pill'}>
          {row.status}
        </span>
      ),
      sortable: true,
    },
  ];

  return <DataTable columns={columns} data={serviceOverview} pagination />;
};

export default ServiceOverviewTable;
