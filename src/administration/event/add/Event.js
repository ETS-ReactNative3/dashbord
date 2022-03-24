import React from "react";
import { Row, Col, Table,  Button, Badge } from "reactstrap";
import Widget from "../../../components/Widget";
import s from "./Event.module.scss";


import { createEvent } from "../../../controller/events";





class AddEvent extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  state = {
    
  };  


  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {

    return (
      <div className={s.root}>
        

      </div>
    );
  }
}

export default AddEvent;
