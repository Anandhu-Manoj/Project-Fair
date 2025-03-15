import React, { useState } from 'react'
import uploadimage from '../assets/uploadIMG.jpg'
import { Modal,Button } from 'react-bootstrap';



const EditProject = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>

  <button className='btn' onClick={handleShow} ><i className="fa-solid fa-pen-to-square"></i></button>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-4">
            <label><input type="file" style={{display:"none"}}/>
            <img className='img-fluid' src={uploadimage} alt="" /></label>
            <p className='text-warning fw-bolder mt-3'>*upload only the following file types (jpeg,jpg,png) here!!!*</p>
          </div>
          <div className="col-lg-8">
            <input type="text" placeholder='project Title' className='form-control mt-2'  />
            <input type="text" placeholder='project Language' className='form-control mt-2'  />
            <input type="text" placeholder='project OverView' className='form-control mt-2'  />
            <input type="text" placeholder='project GitHub Link' className='form-control mt-2'  />
            <input type="text" placeholder='project Website Link' className='form-control mt-2'  />
           
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default EditProject