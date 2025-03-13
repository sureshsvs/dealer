import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MechanicCreation = () => {
  return (
    <Container fluid className="pt-4 px-4">
      <Row>
        <Col lg={12}>
          <div className="bg-light p-4 mb-3">
            <h1>Mechanic Creation</h1>
            <h6 className="mt-3 text-secondary">Create a new mechanic account and add details.</h6>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        <Col sm={12} xl={12}>
          <div className="shadow h-100 p-4">
            <h4 className="mb-4">
              Mechanic Creation
              <button type="submit" className="btn btn-primary float-end">
                <i className="fa fa-plus"></i> Add Mechanic
              </button>
            </h4>

            <form>
              <Row>
                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address Line 1</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" placeholder="Enter state" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Vehicle Type</label>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="1" />
                      <label className="form-check-label">Sedan</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="2" />
                      <label className="form-check-label">SUV</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="3" />
                      <label className="form-check-label">Hatchback</label>
                    </div>
                  </div>
                </Col>

                <Col sm={12} lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mechanic ID</label>
                    <input type="text" className="form-control" placeholder="Mechanic ID" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Join Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-3">Cancel</button>
                <button className="btn btn-primary">Submit</button>
              </div>
              </form>
            </div>
        </Col>
        </Row>
      
    </Container>
  );
};

export default MechanicCreation;
