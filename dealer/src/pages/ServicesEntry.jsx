import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceEntry = () => {
  return (
    <Container fluid className="pt-4 px-4">
      <Row>
        <Col lg={12}>
          <div className="bg-light p-4 mb-3">
            <h1>Services Entry</h1>
            <h6 className="mt-3 text-secondary">
              Assign a task to a mechanic who is free and ensure the work is completed before the deadline.
            </h6>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        <Col sm={12} xl={12}>
          <div className="shadow h-100 p-4">
            <h4 className="mb-4">
              Assign Task
              <button type="submit" className="btn btn-primary float-end">
                <i className="fa fa-add me-lg-2"></i> Add New Task
              </button>
            </h4>

            <form>
              <Row>
                {/* Left Column */}
                <Col sm={12} xl={6}>
                  <div className="mb-3">
                    <label className="form-label">Select Vehicle Type</label>
                    <select className="form-control">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Vehicle Type</label>
                    <select className="form-select">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Choose Service</label>
                    <select className="form-select">
                      <option selected>Open this select Service</option>
                      <option value="1">Engine Oil Service</option>
                      <option value="2">Tires & Wheel Care</option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="mb-3 col-xl-6">
                      <label className="form-label">Drop Type</label>
                      <select className="form-select">
                        <option selected>Open this select menu</option>
                        <option value="1">Pick-up</option>
                        <option value="2">Home Service</option>
                      </select>
                    </div>
                    <div className="mb-3 col-xl-6">
                      <label className="form-label">Priority</label>
                      <select className="form-select">
                        <option selected>Choose priority</option>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Upload Files</label>
                    <input type="file" className="form-control" multiple />
                  </div>
                </Col>

                {/* Right Column */}
                <Col sm={12} xl={6}>
                  <div className="mb-3">
                    <label className="form-label">Customer Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Choose Service Assistance</label>
                    <select className="form-select">
                      <option selected>Choose service assistance</option>
                      <option value="1">Engine Oil Service</option>
                      <option value="2">Tyres & Wheel Care</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Assigned Date</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Additional Notes</label>
                    <textarea className="form-control" rows="3"></textarea>
                    <button className="btn btn-primary mt-1">
                      <i className="fa-solid fa-microphone"></i>
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
          </Col>
      </Row>      
    </Container>
  );
};

export default ServiceEntry;
