import React from "react";
import { Row, Col, Table,  Button, Badge } from "reactstrap";
import Widget from "../../../components/Widget";
import s from "./Event.module.scss";
import AddEvent from "../../../administration/event/add";

import { getEvents } from "../../../controller/events";





class ListEvent extends React.Component {

  // constructor() {
  //   super();
  // }

  state = {
    
  };

  promise = getEvents();
  

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    
    this.promise.then((events) => {
      localStorage.setItem('events',JSON.stringify(events.data));
    });
    const events = JSON.parse(localStorage.getItem('events'));

    return (

      <div className={s.root}>
        <Row>
          <Col sm={10} className="text-align:right"></Col>
          <Col sm={2} className="text-align:right">
            <Button  className="text-warning" href="/app/administration/event/list"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Creer <i class="fa fa-plus-circle"></i></Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-warning"}>Evenements en attente de validation</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                <thead>
                  <tr>
                    <th key={0} scope="col" className={"text-center pl-0"}>
                      #
                    </th>
                    <th key={1} scope="col" className={"text-center pl-0"}>
                      Nom
                    </th>
                    <th key={2} scope="col" className={"text-center pl-0"}>
                      Promoteur
                    </th>
                    <th key={3} scope="col" className={"text-center pl-0"}>
                      Limite
                    </th>
                    <th key={4} scope="col" className={"text-center pl-0"}>
                      Lieu
                    </th>
                    <th key={5} scope="col" className={"text-center pl-0"}>
                      Debut E
                    </th>
                    <th key={6} scope="col" className={"text-center pl-0"}>
                      Fin E
                    </th>
                    <th key={7} scope="col" className={"text-center pl-0"}>
                      Debut P
                    </th>
                    <th key={8} scope="col" className={"text-center pl-0"}>
                      Fin P
                    </th>
                    <th key={9} scope="col" className={"text-center pl-0"}>
                      Categorie
                    </th>
                    <th key={10} scope="col" className={"text-center pl-0"}>
                      Utilisateur
                    </th>
                    <th key={11} scope="col" className={"text-center pl-0"}>
                      Status
                    </th>
                    <th key={12} scope="col" className={"text-center pl-0"}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  {
                    events && events.map((event, index) => { 
                      if (event.status === 'waiting') {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date.toString()}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.category}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.account_id}</td>
                            <td className={"pl-0 text-warning fw-normal"}>{event.status}</td>
                            <td className={"pl-0 fw-normal"}>
                              <a href="#" style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-check-circle"></i></a>
                              <a href="#" style={{fontSize:"20px"}}><i class="text-danger fa fa-times-circle"></i></a>
                            </td>                          
                          </tr>
                        );
                      }
                    })
                  }
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-success"}>Evenements valides</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                <thead>
                  <tr>
                    <th key={0} scope="col" className={"text-center pl-0"}>
                      #
                    </th>
                    <th key={1} scope="col" className={"text-center pl-0"}>
                      Nom
                    </th>
                    <th key={2} scope="col" className={"text-center pl-0"}>
                      Promoteur
                    </th>
                    <th key={3} scope="col" className={"text-center pl-0"}>
                      Limite
                    </th>
                    <th key={4} scope="col" className={"text-center pl-0"}>
                      Lieu
                    </th>
                    <th key={5} scope="col" className={"text-center pl-0"}>
                      Debut E
                    </th>
                    <th key={6} scope="col" className={"text-center pl-0"}>
                      Fin E
                    </th>
                    <th key={7} scope="col" className={"text-center pl-0"}>
                      Debut P
                    </th>
                    <th key={8} scope="col" className={"text-center pl-0"}>
                      Fin P
                    </th>
                    <th key={9} scope="col" className={"text-center pl-0"}>
                      Categorie
                    </th>
                    <th key={10} scope="col" className={"text-center pl-0"}>
                      Utilisateur
                    </th>
                    <th key={11} scope="col" className={"text-center pl-0"}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  {
                    events && events.map((event, index) => { 
                      if (event.is_valid === 1) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.category}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.account_id}</td>
                            <td  className={"pl-0 text-warning fw-normal"}>{event.status}</td>                          
                          </tr>
                        );
                      }
                    })
                  }
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row> 


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-danger"}>Evenements non valides</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                <thead>
                  <tr>
                    <th key={0} scope="col" className={"text-center pl-0"}>
                      #
                    </th>
                    <th key={1} scope="col" className={"text-center pl-0"}>
                      Nom
                    </th>
                    <th key={2} scope="col" className={"text-center pl-0"}>
                      Promoteur
                    </th>
                    <th key={3} scope="col" className={"text-center pl-0"}>
                      Limite
                    </th>
                    <th key={4} scope="col" className={"text-center pl-0"}>
                      Lieu
                    </th>
                    <th key={5} scope="col" className={"text-center pl-0"}>
                      Debut E
                    </th>
                    <th key={6} scope="col" className={"text-center pl-0"}>
                      Fin E
                    </th>
                    <th key={7} scope="col" className={"text-center pl-0"}>
                      Debut P
                    </th>
                    <th key={8} scope="col" className={"text-center pl-0"}>
                      Fin P
                    </th>
                    <th key={9} scope="col" className={"text-center pl-0"}>
                      Categorie
                    </th>
                    <th key={10} scope="col" className={"text-center pl-0"}>
                      Utilisateur
                    </th>
                    <th key={11} scope="col" className={"text-center pl-0"}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  {
                    events && events.map((event, index) => { 
                      if (event.status !== 'waiting' && event.is_valid === 0) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.category}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.account_id}</td>
                            <td  className={"pl-0 text-warning fw-normal"}>{event.status}</td>                          
                          </tr>
                        );
                      }
                    })
                  }  
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>

      </div>
    );
  }
}

export default ListEvent;