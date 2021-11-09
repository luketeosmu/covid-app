import React from 'react'
import { Container, Modal, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import AuthenticationService from '../../services/AuthenticationService'

const BusinessInformation = () => {
    useEffect(() => {
        AuthenticationService.getBusiness();
        setBusinessName(AuthenticationService.getCurrentUserBusiness().businessName);
        setCategory(AuthenticationService.getCurrentUserBusiness().category);
        setOutdoorIndoor(AuthenticationService.getCurrentUserBusiness().outdoorIndoor);
        setCapacity(AuthenticationService.getCurrentUserBusiness().capacity);
    })
    const [businessName, setBusinessName] = useState("")
    const [category, setCategory] = useState("")
    const [outdoorIndoor, setOutdoorIndoor] = useState("")
    const [capacity, setCapacity] = useState(0)

    const [newBusinessName, setNewBusinessName] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const [newOutdoorIndoor, setNewOutdoorIndoor] = useState("")
    const [newCapacity, setNewCapacity] = useState(0)

    const [newBusinessNameForm, setNewBusinessNameForm] = useState(false)
    const [newCategoryForm, setNewCategoryForm] = useState(false)
    const [newOutdoorIndoorForm, setNewOutdoorIndoorForm] = useState(false)
    const [newCapacityForm, setNewCapacityForm] = useState(false)

    const handleNewBusinessNameForm = () => {
        setNewBusinessNameForm(true);
    }
    const handleCloseNewBusinessNameForm = () => {
        setNewBusinessNameForm(false);
    }

    const handleNewCategoryForm = () => {
        setNewCategoryForm(true);
    }
    const handleCloseNewCategoryForm = () => {
        setNewCategoryForm(false);
    }

    const handleNewOutdoorIndoorForm = () => {
        setNewOutdoorIndoorForm(true)
    }
    const handleCloseNewOutdoorIndoorForm = () => {
        setNewOutdoorIndoorForm(false)
    }

    const handleNewCapacityForm = () => {
        setNewCapacityForm(true)
    }
    const handleCloseNewCapacityForm = () => {
        setNewCapacityForm(false)
    }
    
    //update methods
    const updateBusinessName = () => {
        let newBusiness = {
            businessName: newBusinessName,
            category: category,
            outdoorIndoor: outdoorIndoor,
            capacity: capacity
        }
        AuthenticationService.updateBusiness(newBusiness)
            .then((res) => {
                handleCloseNewBusinessNameForm();
            })
    }

    const updateCategory = () => {
        let newBusiness = {
            businessName: businessName,
            category: newCategory,
            outdoorIndoor: outdoorIndoor,
            capacity: capacity
        }

        AuthenticationService.updateBusiness(newBusiness)
            .then((res) => {
                handleCloseNewCategoryForm();
            })
    }

    const updateOutdoorIndoor = () => {
        let newBusiness = {
            businessName: businessName,
            category: category,
            outdoorIndoor: newOutdoorIndoor,
            capacity: capacity
        }

        AuthenticationService.updateBusiness(newBusiness)
            .then((res) => {
                handleCloseNewOutdoorIndoorForm();
            })
    }

    const updateCapacity = () => {
        let newBusiness = {
            businessName: businessName,
            category: category,
            outdoorIndoor: outdoorIndoor,
            capacity: newCapacity
        }

        AuthenticationService.updateBusiness(newBusiness)
            .then((res) => {
                handleCloseNewCapacityForm();
            })
    }

    return (
        <div style={{ height: "70vh" }} className="p-0">
            <div>
                <h1 style={{ fontSize: "20px", fontWeight: "500" }} className="ms-5 m-4 text-center">Update Business Details</h1>
                <hr />
                <Container>
                    <ul style={{fontSize : "18px", listStyle: "none"}}>
                        <li className="mt-4 mb-3"> 
                            <p><strong>Business Name: </strong>{businessName}</p>
                            <button className="p-2" style={{ border: "none", borderRadius: "10px" }} onClick={handleNewBusinessNameForm}>Edit Business Name <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                        </li>
                        <li className="mt-4 mb-3">
                            <p><strong>Category: </strong>{outdoorIndoor == "i" ? "Indoor" : "Outdoor"}</p>
                            <button className="p-2" style={{ border: "none", borderRadius: "10px" }} onClick={handleNewOutdoorIndoorForm}>Edit Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                        </li>
                        <li className="mt-4 mb-3">
                            <p><strong>Subcategory: </strong>{category}</p>
                            <button className="p-2" style={{ border: "none", borderRadius: "10px" }} onClick={handleNewCategoryForm}>Edit Subcategory <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                        </li>
                        <li className="mt-4 mb-3">
                            <p><strong>Number of Employees: </strong>{capacity}</p>
                            <button className="p-2" style={{ border: "none", borderRadius: "10px" }} onClick={handleNewCapacityForm}>Edit Number of Employees <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                        </li>
                    </ul>
                </Container>
                <Modal show={newBusinessNameForm} onHide={handleCloseNewBusinessNameForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Business Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="ms-4 me-4">
                            <Form.Group className="mb-3">
                                <Form.Label>New Business Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Museum of Singapore"
                                    value={newBusinessName}
                                    onChange={(e) => setNewBusinessName(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseNewBusinessNameForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateBusinessName}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={newCategoryForm} onHide={handleCloseNewCategoryForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Subcategory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="ms-4 me-4">
                            <Form.Group className="mb-3">
                                <Form.Label>New Subcategory</Form.Label>
                                <Form.Select required onChange={(e) => setNewCategory(e.target.value)}>
                                    
                                    <option value="Theme Park">Theme Park</option>
                                    <option value="Zoo/Safari">Zoo/Safari</option>
                                    <option value="Art Gallery">Art Gallery</option>
                                    <option value="Museum">Museum</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseNewCategoryForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateCategory}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={newOutdoorIndoorForm} onHide={handleCloseNewOutdoorIndoorForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="ms-4 me-4">
                            <Form.Group className="mb-3">
                                <Form.Label>New Category</Form.Label> {/*should be subcategory?*/}
                                <Form.Select required onChange={(e) => setNewOutdoorIndoor(e.target.value)}>
                                    <option value="i">Indoor</option>
                                    <option value="o">Outdoor</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseNewOutdoorIndoorForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateOutdoorIndoor}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={newCapacityForm} onHide={handleCloseNewCapacityForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Number of Employees</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="ms-4 me-4">
                            <Form.Group className="mb-3">
                                <Form.Label>New Number of Employees</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="e.g. 123"
                                    value={newCapacity}
                                    onChange={(e) => setNewCapacity(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseNewCapacityForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateCapacity}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default BusinessInformation
