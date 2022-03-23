import React from 'react';
import {
  Row, Col, Button, Table,
} from 'reactstrap';
import Widget from "../../components/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Administrator.module.scss';


import { getAdministrators } from "../../controller/administrator";

class Administrator extends React.Component {

  state = {
    
  }
  promise = getAdministrators();
  


  componentDidMount() {}


  render() {
    this.promise.then((administrators) => {
      localStorage.setItem('administrators',JSON.stringify(administrators.data));
    });
    const administrators = JSON.parse(localStorage.getItem('administrators'));

    return (
        <div className={s.root}>
          <Row>
            <Col sm={10} className="text-align:right"></Col>
            <Col sm={2} className="text-align:right">
              <Button  className="text-warning" href="./Administrator.js"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Creer <i class="fa fa-plus-circle"></i></Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Widget
                // customDropDown
                title={<p className={"fw-bold text-warning"}>Les administrateurs du dashboard</p>}
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
                        Username
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Contact
                      </th>
                      <th key={4} scope="col" className={"text-center pl-0"}>
                        Level
                      </th>
                      <th key={12} scope="col" className={"text-center pl-0"}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    {
                      administrators && administrators.map((administrator, index) => { 
                        return ( 
                          <tr key={index++}>

                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{administrator.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{administrator.username}</td>
                            <td className={"pl-0 fw-normal text-center"}>{administrator.contact}</td>
                            <td className={"pl-0 fw-normal text-center"}>{administrator.level}</td>
                            <td className={"pl-0 fw-normal"}>
                              <a href="#" style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-check-circle"></i></a>
                              <a href="#" style={{fontSize:"20px"}}><i class="text-danger fa fa-times-circle"></i></a>
                            </td>                          
                          </tr>
                        );
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

export default Administrator;
