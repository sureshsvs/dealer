import React from 'react';
import { Container } from "react-bootstrap";

const CustomerFeedback = () => {
  return (
    <Container fluid className="pt-4 px-4">
      <div className='row'>
        <div className="col-lg-12">
          <div className='bg-light p-4 mb-3'>
            <h1>Mechanic Creation</h1>
            <h6 className="mt-3">Mechanic Creation Form</h6>
          </div>
        </div>
      </div>
      <div className='row g-4'>
        <div className="col-sm-12 col-xl-12">
          <div className="shadow h-100 p-4">
            <h4 className="mb-4">Mechanic Creation <button type="submit" className="btn btn-primary float-end"> <i className="fa fa-add me-lg-2"></i>Add New Mechanic</button></h4>
            <form>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='mb-3'>
                    <label className='form-label'>Mechanic Name</label>
                    <input type='text' className='form-control' placeholder='' />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Address Line 1</label>
                    <textarea className='form-control'></textarea>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>State</label>
                    <input type='text' className='form-control' placeholder='' />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Phone No 1</label>
                    <input className='form-control' type='text' />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Vehicle Type</label>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value=''></input>
                      <label className='form-check-label'>Sedan</label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value=''></input>
                      <label className='form-check-label'>SUV</label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value=''></input>
                      <label className='form-check-label'>Hatchback</label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='mb-3'>
                    <label className='form-label'>Email ID</label>
                    <input type='email' className='form-control' placeholder='' />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>City</label>
                    <input type='text' className='form-control' placeholder=''></input>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Phone No</label>
                    <input type='text' className='form-control' placeholder=''></input>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Join Date</label>
                    <input type='date' className='form-control'></input>
                  </div>
                </div>
                </div>
              
              <button type='submit' className='btn btn-primary float-end mb-3'>Submit</button>
              <button type='button' className='btn btn-secondary float-end mb-3 me-3'>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
    );
  }


export default CustomerFeedback;
