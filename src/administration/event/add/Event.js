import React,{useState} from "react";
import { Row, Col, Table,  Button, Badge } from "reactstrap";
import Widget from "../../../components/Widget";
import {Link} from "react-router-dom";
import s from "./Event.module.scss";
import { toast } from "react-toastify";
import  {createEvent} from "../../../controller/events";

const initialState = {
  
    "name": "",
    "organizer": "",
    "limitRegistration":"",
    "country": "",
    "city": "",
    "district": "",
    "location": "",
    "startingDate":"",
    // "startingTime":"",
    "endingDate": "",
    // "endingTime":"",
    "description": "",
    "phone": "",
    "category":"",
    "accountId": "",
    "publishingStartDate": "",
    "publishingEndDate": "",
}



function AddEvent()  {

const [state,setState] = useState(initialState);
const { name, organizer, limitRegistration, country, city,district, location, startingDate,startingTime, endingDate, endingTime, description,phone, category,accountId, publishingStartDate,publishingEndDate} = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
        ...state,
        [name]: value,
    });
};

console.log(state);
const handleSubmit = (e) => {
  if (!name || !organizer || !limitRegistration || !country || !city || !district  || !location || !startingDate  || !endingDate || !description  || !category || !accountId, !publishingStartDate || !publishingEndDate) {
      toast.error("Please provide value into each input field");
      // e.preventDefault();
  }
  else {
     
          createEvent(state);
          // toast.success("Event added successfuly");


      }
};


  return(
    <div className={s.root}>
      <Row>
          <Col sm={10} className="text-align:right"></Col>
          <Col sm={2} className="text-align:right">
            <Link to = "/app/administration/event/list">
            <Button  className="text-warning"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Event list </Button>
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
            <label htmlFor="organizer"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            ><strong>organizer : </strong> </label>
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
              id="organizer"
              name="organizer"
              placeholder="Enter the name of organizer ..."
            onChange={handleInputChange}
            value={organizer}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="limit_registration"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>limit registration :</strong> </label>
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
              type="number"
              id="limitRegistration"
              name="limitRegistration"
              placeholder="Enter places availables"
            onChange={handleInputChange}
            value={limitRegistration}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="country"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event country :</strong> </label>
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
              id="country"
              name="country"
              placeholder="Enter country"
            onChange={handleInputChange}
            value={country}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="country"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Description :</strong> </label>
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
              id="description"
              name="description"
              placeholder="tell something about event"
            onChange={handleInputChange}
            value={description}

            />
          </td>
        </tr>
        
        <tr>
          <td>
            <label htmlFor="city"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event city :</strong> </label>
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
              id="city"
              name="city"
              placeholder="Enter city"
            onChange={handleInputChange}
            value={city}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="district"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event district :</strong> </label>
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
              id="district"
              name="district"
              placeholder="Enter district"
            onChange={handleInputChange}
            value={district}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="location"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event location :</strong> </label>
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
              id="location"
              name="location"
              placeholder="Enter location"
            onChange={handleInputChange}
            value={location}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="startingDate"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event starting date :</strong> </label>
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
              type="date"
              id="startingDate"
              name="startingDate"
              placeholder="Enter starting date"
            onChange={handleInputChange}
            value={startingDate}

            />
          </td>
        </tr>

        {/* <tr>
          <td>
            <label htmlFor="startingDate"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Start Time  :</strong> </label>
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
              type="date"
              id="startingDate"
              name="startingDate"
              placeholder="Enter starting date"
            onChange={handleInputChange}
            value={startingDate}

            />
          </td>
        </tr> */}

        <tr>
          <td>
            <label htmlFor="endingDate"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong>Event ending date :</strong> </label>
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
              type="date"
              id="endingDate"
              name="endingDate"
              placeholder="Enter ending date"
            onChange={handleInputChange}
            value={endingDate}

            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="phone"
              style={{
                marginTop: "40px",
                marginRight: "50px",
              }}
            > <strong> Number :</strong> </label>
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
              id="phone"
              name="phone"
              placeholder="Enter phone number"
            onChange={handleInputChange}
            value={phone}

            />
          </td>
        </tr>

        <tr>
          <td>
          <label htmlFor="category"
          style={{
            marginTop: "40px",
            marginRight: "50px",
          }}
        > <strong>category :</strong></label>
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
          id="category" name="category"
        value={category} 
        onChange={handleInputChange}
        >
          <option value="Concert" >Concert</option>
          <option value="Gala" >Gala</option>
          <option value="Kermesse" >Kermesse</option>
          <option value="Sortie" >Sortie</option>
          <option value="Autre" >Autre</option>
        </select>
          </td>
        </tr>

        <tr>
          <td>
          <label htmlFor="accountId"
          style={{
            marginTop: "40px",
            marginRight: "50px",
          }}
        > <strong>ID Compte :</strong></label>
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
          type="number"
          id="accountId"
          name="accountId"
          placeholder="Enter L'ID du compte ..."
        value={accountId}
        onChange={handleInputChange}

        />
          </td>
        </tr>

        <tr>
          <td>
          <label htmlFor="publishingStartDate"
          style={{
            marginTop: "40px",
            marginRight: "50px",
          }}
        > <strong>Début de publication :</strong></label>
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
          type="date"
          id="publishingStartDate"
          name="publishingStartDate"
          placeholder="Enter la date pour le début de la publication ..."
        value={publishingStartDate}
        onChange={handleInputChange}

        />
          </td>
        </tr>
        <tr>
          <td>
          <label htmlFor="publishingEndDate"
          style={{
            marginTop: "40px",
            marginRight: "50px",
          }}
        > <strong>Fin de publication :</strong></label>
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
          type="date"
          id="publishingEndDate"
          name="publishingEndDate"
          placeholder="Enter la  date de fin de la publication ..."
        value={publishingEndDate}
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
          type="submit" value={"Add Event"} />
      </form>
            <br />
     
    </div>
  </div>
  )
}

export default AddEvent;
