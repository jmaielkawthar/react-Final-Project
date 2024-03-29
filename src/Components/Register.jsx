import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-modal";

const Register= ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [cin, setCin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOne = {
      id: Math.random(),
      name,
      image,
      telephone,
      adresse,
      cin,
      email,
      password,
      role,
    };
    handleAdd(newOne);
    setName("");
    setImage("");
    setTelephone("");
    setAdresse("");
    setCin("");
    setEmail("");
    setPassword("");
    setRole("");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="register">
      <button onClick={openModal}>Register </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="image">
            <label>Product image</label>
            <input
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <label>Telephone</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label>Adresse</label>
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <label>Cin</label>
          <input
            type="text"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <div>
            <button className="btn" type="submit">
              register
            </button>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
