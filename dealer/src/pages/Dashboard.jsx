import React from 'react';
import { useData } from '../context/DataContext';
import { Container } from "react-bootstrap";
import MechanicAvailableStatusTable from '../components/MechanicAvailableStatus';
import ServiceOverviewTable from '../components/serviceOverviewTable';

export default function Dashboard() {
  const { products } = useData();

  return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <p>Total Products: {products.length}</p>
    //   <ul>
    //     {products.map(product => (
    //       <li key={product.id}>{product.title}</li>
    //     ))}
    //   </ul>
    // </div>
    <Container fluid className="pt-4 px-4">

            <div className="row g-4">
                <div data-aos="fade-up" className="col-sm-6 col-xl-3">
                    <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-gears fa-2x text-primary"></i>
                        
                        <div className="ms-3">
                            <p className="mb-2">At Service</p>
                            <h6 className="mb-0">4</h6>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-sm-6 col-xl-3">
                    <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-wrench fa-2x text-primary"></i>
                        
                        <div className="ms-3">
                            <p className="mb-2">Mechanic</p>
                            <h6 className="mb-0">10</h6>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-sm-6 col-xl-3">
                    <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-truck-ramp-box fa-2x text-primary"></i>
                       
                        <div className="ms-3">
                            <p className="mb-2">Completed Service</p>
                            <h6 className="mb-0">3</h6>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-sm-6 col-xl-3">
                    <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <i className="fa fa-chart-pie fa-2x text-primary"></i>
                        <div className="ms-3">
                            <p className="mb-2">Total Revenue</p>
                            <h6 className="mb-0">$1234</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <Container className="bg-white mt-5 p-5 shadow">
                    <div className="row">

                        <div className="col-lg-12">
                            <h5>Service Overviews</h5>
                            <ServiceOverviewTable/>
                        </div>
                    </div>
                </Container>

            </div>
            <div className="row g-4">
                <Container className="bg-white mt-5 p-5 shadow">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5>Mechanic Available for Work</h5>
                            <MechanicAvailableStatusTable/>
                        </div>
                    </div>
                </Container>

            </div>

        </Container>
  );
}
