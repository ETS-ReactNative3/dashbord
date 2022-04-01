import React from 'react';
import {
  Row, Col, Button, Table,
} from 'reactstrap';
import { Link} from "react-router-dom";
import {getPartners} from '../../../controller/Partners';
import Widget from "../../../components/Widget/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Partners.module.scss';
import  {deletePartner}  from '../../../controller/Partners';


function ListPartners () {
  
  const onDeletePartner = async (id) => {
    deletePartner(id);
};

 const promise = getPartners();
  

    promise.then((Partners) => {
      localStorage.setItem('Partners',JSON.stringify(Partners.data));
    });
    const Partners = JSON.parse(localStorage.getItem('Partners'));

    return (
        <div className={s.root}>
          <Row>
            <Col sm={10} className="text-align:right"></Col>
            <Col sm={2} className="text-align:right">
            <Link to="/app/administration/Partners/addPartners">
            <Button  className="text-warning"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Créer <i class="fa fa-plus-circle"></i></Button>
            </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Widget
                // customDropDown
                title={<p className={"fw-bold text-warning"}>Les Partenaires d'intercash</p>}
              >
                <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                  <thead>
                    <tr>
                      <th key={0} scope="col" className={"text-center pl-0"}>
                        #
                      </th>
                      <th key={1} scope="col" className={"text-center pl-0"}>
                       id
                      </th>
                      <th key={2} scope="col" className={"text-center pl-0"}>
                        Name
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        logo
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Commandes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    {
                      Partners && Partners.map((Partner, index) => { 
                        return ( 
                          <tr key={index++}>

                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{Partner.id}</td>
                            <td className={"pl-0 fw-normal text-center"}>{Partner.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{Partner.logo}</td>
                            <td className={"pl-0 fw-normal text-center"}>
                            <Link to={`add/${Partner.id}`} style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-edit"></i></Link>
                            <button onClick={() => onDeletePartner(Partner.id)} style={{fontSize:"20px"}}><i class="text-danger fa fa-trash-o"></i></button>
                             
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

export default ListPartners;
