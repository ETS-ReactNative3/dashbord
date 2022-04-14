import React from 'react';
import {
  Row, Col, Button, Table,
} from 'reactstrap';
import { Link } from "react-router-dom";
import { getStores} from '../../../controller/store';
import Widget from "../../../components/Widget/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Stores.module.scss';



function ListStore() {

const promise = getStores();


promise.then((value) => {
  localStorage.setItem('stores', JSON.stringify(value));
  
});
const Stor = JSON.parse(localStorage.getItem('stores'));

return (
  <div className={s.root}>
  
    <Row>
      <Col sm={12}>
        <Widget
          // customDropDown
          title={<p className={"fw-bold text-warning"}>Listes des Stores</p>}
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
                  Secteur d'activité
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Localité
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Username
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Date de création
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Montant transaction
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Derniere modification
                </th>
                <th key={3} scope="col" className={"text-center pl-0"}>
                  Commandes
                </th>
              </tr>
            </thead>
            <tbody className="text-dark">

              {
                Stor && Stor.map((store, index) => {
                  return (
                    <tr key={index++}>

                      <td scope='row'>{index}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.id}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.name}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.activity_area}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.locality}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.username}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.creation_date}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.amount}</td>
                      <td className={"pl-0 fw-normal text-center"}>{store.last_update}</td>
                      <td className={"pl-0 fw-normal text-center"}>
                        <Link to={`add/${store.id}`}  style={{ fontSize: "20px", marginRight: "15px" }}><i class="text-success fa fa-edit"></i></Link>
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

}export default ListStore;
