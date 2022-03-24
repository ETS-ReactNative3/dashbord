import React from 'react';
import {
  Row, Col, Button, Table,
} from 'reactstrap';
import Widget from "../../../components/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Administrator.module.scss';


import { getAdministrators } from "../../../controller/administrator";

class AddAdministrator extends React.Component {

  state = {
    
  }
  promise = getAdministrators();
  


  componentDidMount() {}


  render() {
    return (
        <div className={s.root}>
      
        </div>
    );
  }
}

export default AddAdministrator;
