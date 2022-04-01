import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import s from './Partners.module.scss';
import { useState } from "react";
import { toast } from "react-toastify";
import { createPartners } from '../../../controller/Partners';




const initialState = {
  name: "",
  logo: "",
};



function AddPartners() {

  const [state, setState] = useState(initialState);

  const {name, logo} = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    if (!name ) {
      toast.error("Please provide value into each input field");
    }
    else {

        createPartners(state);
      toast.success("User added successfuly");

    }

  };

  return (
    <div className={s.root}>
      <div className="form-group text-center">
        <h2>CREATION D'UN PARTENAIRE</h2>
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
              <label htmlFor="logo"
                style={{
                  marginTop: "40px",
                  marginRight: "50px",
                }}
              ><strong>Logo : </strong> </label>
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
                id="logo"
                name="logo"
                placeholder="Enter Logo ..."
                onChange={handleInputChange}
                value={logo}

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
            type="submit" value={"Add Partner "} />
        </form>
      </div>
    </div>
  );

}

export default AddPartners;
