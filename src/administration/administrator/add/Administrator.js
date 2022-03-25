import React from 'react';
import {
  Row, Col, Button, Table,
} from 'reactstrap';
import Widget from "../../../components/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Administrator.module.scss';
import { Alert, Label, FormGroup, Input } from "reactstrap";


import { getAdministrators } from "../../../controller/administrator";

class AddAdministrator extends React.Component {

  state = {

  }
  promise = getAdministrators();



  componentDidMount() { }


  render() {
    return (
      <div className={s.root}>
        <div className="form-group">
          <h1>CREATION D'ADMINISTRATEUR INTERCASH</h1>
          <form

            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "500px",
              alignContent: "center",
              color: "#DF3F3F",
              fontWeight: "bold",
              backgroundColor: "#FFF3F3"



            }}
          // onSubmit={handleSubmit}
          >
            <label
              style={{
                marginTop: "10px",
                marginRight: "50px",
              }}
              htmlFor="name">
              <strong>Name :</strong> </label>
            <input
              style={{
                padding: "3px",
                border: "1px solid #F5C5C5",
                borderRadius: "5px",
                width: "200px",
                boxShadow: "1px 1px 2px #C0C0C0 inset",
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Enter name ..."
            // onChange={handleInputChange}
            // value={name}

            />
            <br />
            <br />

            <label htmlFor="username"
              style={{
                marginTop: "10px",
                marginRight: "50px",
              }}
            ><strong>Username : </strong> </label>
            <input

              style={{
                padding: "3px",
                border: "1px solid #F5C5C5",
                borderRadius: "5px",
                width: "200px",
                boxShadow: "1px 1px 2px #C0C0C0 inset",
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter Contact No. ..."
            // onChange={handleInputChange}
            // value={username}

            />
            <br />
            <br />
            <label htmlFor="password"
              style={{
                marginTop: "10px",
                marginRight: "50px",
              }}
            > <strong>password :</strong> </label>
            <input
              style={{
                padding: "3px",
                border: "1px solid #F5C5C5",
                borderRadius: "5px",
                width: "200px",
                boxShadow: "1px 1px 2px #C0C0C0 inset",
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            // onChange={handleInputChange}
            // value={password}

            />
            <br />
            <br />

            <Row style={{
              marginLeft: "10px",
            }}>
              <label htmlFor="level"
                style={{
                  marginTop: "10px",
                  marginRight: "50px",
                }}
              > <strong>Level :</strong></label>
              <br />
              <br />
              <select
                style={{
                  marginTop: "10px",
                  marginRight: "50px",
                  padding: "3px",
                  border: "1px solid #F5C5C5",
                  borderRadius: "5px",
                  width: "200px",
                  boxShadow: "1px 1px 2px #C0C0C0 inset",
                }}
                id="level" name="level"
              // value={level} 
              // onChange={handleInputChange}
              >
                <option value="High" >High</option>
                <option value="Medium" >Medium</option>
                <option value="Low" >Low</option>
              </select>
            </Row >
            <br />
            <br />
            <label htmlFor="contact"
              style={{
                marginTop: "10px",
                marginRight: "50px",
              }}
            > <strong>contact :</strong></label>
            <input
              style={{
                padding: "3px",
                border: "1px solid #F5C5C5",
                borderRadius: "5px",
                width: "200px",
                boxShadow: "1px 1px 2px #C0C0C0 inset",
              }}
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter Contact No. ..."
            // value={contact}
            // onChange={handleInputChange}

            />
            <br />
            <br />
            <input
              style={{
                width: "100px",
                marginLeft: "5px",
                boxShadow: "1px 1px 1px #D83F3D",
                cursor: "pointer",
              }}
              type="submit" value={"Add Admin "} />
          </form>
        </div>
      </div>
    );
  }
}

export default AddAdministrator;
