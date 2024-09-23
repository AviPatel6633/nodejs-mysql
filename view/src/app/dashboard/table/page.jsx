"use client";
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Datatable from '@/component/datatable/datatable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiUserAdd } from "react-icons/ti";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Page = () => {
  const [data, setData] = useState([
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ]);

  const columns = ["Name", "Company", "City", "State", "Actions"];
  const options = {
    filterType: 'checkbox',
    selectableRows: "none",
    customToolbar: () => {
      return (
        <Link href='' onClick={handleShow} className='custom-menu-icon'>
          <TiUserAdd />
        </Link>
      )
    },
  };

  const [newRow, setNewRow] = useState({ name: '', company: '', city: '', state: '' });
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setNewRow({ name: '', company: '', city: '', state: '' });
    setEditIndex(-1);
  };

  const handleAdd = () => {
    setData([...data, [newRow.name, newRow.company, newRow.city, newRow.state]]);
    handleClose();
  };

  const handleEdit = (index) => {
    const rowToEdit = data[index];
    setNewRow({
      name: rowToEdit[0],
      company: rowToEdit[1],
      city: rowToEdit[2],
      state: rowToEdit[3],
    });
    setEditIndex(index);
    handleShow();
  };

  const handleUpdate = () => {
    const updatedData = [...data];
    updatedData[editIndex] = [newRow.name, newRow.company, newRow.city, newRow.state];
    setData(updatedData);
    handleClose();
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const rows = data.map((row, index) => {
    return [
      ...row,
      <>
        <Link className='custom-menu-icon ' href='' onClick={() => handleEdit(index)}><FaEdit className='blue-color' /></Link>
        <Link href='' onClick={() => handleDelete(index)} className='custom-menu-icon '><MdDelete className='red-color' /></Link>
      </>,
    ];
  });

  return (
    <>
      <Datatable
        data={rows}
        columns={columns}
        options={options}
      />
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex === -1 ? 'Add New Row' : 'Edit Row'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newRow.name}
                onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                value={newRow.company}
                onChange={(e) => setNewRow({ ...newRow, company: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={newRow.city}
                onChange={(e) => setNewRow({ ...newRow, city: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={newRow.state}
                onChange={(e) => setNewRow({ ...newRow, state: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editIndex === -1 ? handleAdd : handleUpdate}>
            {editIndex === -1 ? 'Add' : 'Update'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Page;
