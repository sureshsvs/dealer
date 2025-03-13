import React from 'react';
import { Container } from 'react-bootstrap';

const VehicleTracking = () => {
  return (
    <Container fluid className="pt-4 px-4">
      <div className='row'>
        <div className='col-lg-12'>
          <div className='bg-light p-4 mb-3'>
            <h1>Vehicle Tracking</h1>
            <h6 className='mt-3 text-secondary'>
              Assign a Task to a mechanic who is free and make them get the work done before the deadline.
            </h6>
          </div>
        </div>
      </div>

      <div className='row g-5'>
        <div className='col-lg-3'>
          <div className='search-container'>
            <h4 className='mb-3'>Tracking ID</h4>
            <input type='text' className='form-control search-input' placeholder='Search...' />
            <i className='fas fa-search search-icon'></i>
          </div>
        </div>
      </div>

      <Container className='bg-white mt-5 p-5 shadow'>
        <div className='row'>
          <div className='col-lg-3'>
            <h6 className='fw-bold'>Customer Name:</h6>
            <div className='fw-light fs-6 ms-2'>Harsh</div>
            <h6 className='fw-bold mt-4'>Cust. ID:</h6>
            <div className='fw-light fs-6 ms-2'>KA01AY8989</div>
          </div>
          <div className='col-lg-3'>
            <h6 className='fw-bold'>Service:</h6>
            <div className='fw-light fs-6 ms-2'>Periodic Service</div>
            <h6 className='fw-bold mt-4'>Mechanic:</h6>
            <div className='fw-light fs-6 ms-2'>Steve Jobs</div>
          </div>
          <div className='col-lg-3'>
            <h6 className='fw-bold'>Assigned Date:</h6>
            <div className='fw-light fs-6 ms-2'>02-06-2024</div>
            <h6 className='fw-bold mt-4'>Due Date:</h6>
            <div className='fw-light fs-6 ms-2'>06-06-2024</div>
          </div>
          <div className='col-lg-3'>
            <h6 className='fw-bold'>Priority:</h6>
            <div className='fw-light fs-6 ms-2'>High</div>
            <h6 className='fw-bold mt-4'>Extra Issues:</h6>
            <div className='fw-light fs-6 ms-2'>Mentioned</div>
          </div>
        </div>
      </Container>

      <Container className='bg-white mt-5 p-5 shadow'>
        <div className='row'>
          <div className='col-lg-4 bg-light p-4'>
            <h3>Ongoing Service</h3>
            <div className='col-lg-12 bg-white p-2 ps-3 mt-4'>
              <h6 className='fw-bold'>Engine Overheating</h6>
              <h6 className='mt-3'>Possible causes and solutions</h6>
            </div>
            <div className='col-lg-12 bg-white p-2 ps-3 mt-4'>
              <h6 className='fw-bold'>Strange Engine Noises</h6>
              <h6 className='mt-3'>Identifying common issues</h6>
            </div>
            <div className='col-lg-12 bg-white p-2 ps-3 mt-4'>
              <h6 className='fw-bold'>Brake System Failure</h6>
              <h6 className='mt-3'>Warning signs and maintenance</h6>
            </div>
          </div>
          <div className='col-lg-8 p-4'>
            <h5 className='fw-bold'>Completed Service</h5>
            <div className='col-lg-12 bg-light p-3 mt-4 d-flex justify-content-between align-items-center'>
              <div>
                <h6 className='fw-bold'>Oil changed</h6>
                <h6 className='mt-1'>Castrol engine oil changed.</h6>
              </div>
              <button className='btn btn-primary'>Completed</button>
            </div>
            <div className='col-lg-12 bg-light p-3 mt-4 d-flex justify-content-between align-items-center'>
              <div>
                <h6 className='fw-bold'>Battery Drainage</h6>
                <h6 className='mt-1'>Common causes of battery drainage...</h6>
              </div>
              <button className='btn btn-primary'>Completed</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 mt-4'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299315!3d12.953945614011563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740680431666!5m2!1sen!2sin'
              width='100%'
              height='450'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default VehicleTracking;
