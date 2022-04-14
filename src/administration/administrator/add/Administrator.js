import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import s from './Administrator.module.scss';
import { Row, Col, Table,  Button } from "reactstrap";
import {Link} from 'react-router-dom'
import {useSearchParams} from 'react-router';
import { useState } from "react";
import { toast } from "react-toastify";
import { addAdministrator } from "../../../controller/administrator"
import { updateAdministrator, getSingleAdministrator } from "../../../controller/administrator";



const initialState = {
  name: "",
  username: "",
  password: "",
  level: "",
  contact: "",
};



function AddAdministrator() {

  // console.log(queryString_url_id);
  const [state, setState] = useState(initialState);

  const { name, username, password, level, contact } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (!name || !username || !password || !level || !contact) {
      toast.error("Please provide value into each input field");
    }
    else {

      addAdministrator(state);
      toast.success("User added successfuly");

    }

  };

  return (
    <div className={s.root}>
      <Row>
        <Col sm={10} className="text-align:right"></Col>
        <Col sm={2} className="text-align:right">
          <Link to = "/app/administration/administrator/list" refresh="true">
          <Button  className="text-warning"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Admins list </Button>
          </Link>
        </Col>
      </Row>
      <div className="form-group text-center">
        <h6>CREATION D'ADMINISTRATEUR INTERCASH</h6>
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
          onSubmit={handleSubmit}
        >

          <tr>
            <td>
              <label
                style={{
                  marginTop: "10px",
                  marginRight: "50px",
                }}
                htmlFor="name">
                <strong>Name :</strong>
              </label>
            </td>
            <td>
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
                onChange={handleInputChange}
                value={name}

              />
            </td>
          </tr>

          <tr >
            <td>
              <label htmlFor="username"
                style={{
                  marginTop: "40px",
                  marginRight: "50px",
                }}
              ><strong>Username : </strong> </label>
            </td>
            <td>
              <input
                style={{
                  marginTop: "40px",
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
                onChange={handleInputChange}
                value={username}

              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="password"
                style={{
                  marginTop: "40px",
                  marginRight: "50px",
                }}
              > <strong>password :</strong> </label>
            </td>
            <td>
              <input
                style={{
                  marginTop: "40px",
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
                onChange={handleInputChange}
                value={password}

              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="level"
                style={{
                  marginTop: "40px",
                  marginRight: "50px",
                }}
              > <strong>Level :</strong></label>
            </td>
            <td>
              <select
                style={{
                  marginTop: "40px",
                  padding: "3px",
                  border: "1px solid #F5C5C5",
                  borderRadius: "5px",
                  width: "200px",
                  boxShadow: "1px 1px 2px #C0C0C0 inset",
                }}
                id="level" name="level"
                value={level}
                onChange={handleInputChange}
              >
                <option value="None" >None</option>
                <option value="High" >High</option>
                <option value="Medium" >Medium</option>
                <option value="Low" >Low</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="contact"
                style={{
                  marginTop: "40px",
                  marginRight: "50px",
                }}
              > <strong>contact :</strong></label>
            </td>
            <td>
              <input
                style={{
                  marginTop: "40px",
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
                value={contact}
                onChange={handleInputChange}

              />
            </td>
          </tr>

          <input
            style={{
              marginTop: "40px",
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

export default AddAdministrator;
