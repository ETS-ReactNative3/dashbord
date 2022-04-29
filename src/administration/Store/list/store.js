import React, { useState, useRef } from 'react';
import {
  Row, Col, Table,
} from 'reactstrap';
import { Link } from "react-router-dom";
import { getStores } from '../../../controller/store';
import Widget from "../../../components/Widget/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './Stores.module.scss';
import TextField from "@mui/material/TextField";
import ReactExport from "react-export-excel";
import { CSVLink } from 'react-csv';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';





function ListStore() {

  const promise = getStores();
  const [searchTerm, setSearchTerm] = useState('');
  const pdfExportComponent = useRef(null);
  // const contentArea = useRef(null);
  const _exporter = useRef(null);

  const inputHandler = (e) => {
    var term = e.target.value;
    setSearchTerm(term);
  };


  promise.then((value) => {
    localStorage.setItem('stores', JSON.stringify(value));

  });
  const Stor = JSON.parse(localStorage.getItem('stores'));

  // const Headers = [
  //   { label: 'Name', key: 'name' },
  //   { label: 'Secteur', key: 'activity_area' },
  //   { label: 'Localité', key: 'locality' },
  //   { label: 'Username', key: 'username' },
  //   // {label: 'name' , key : 'name'}
  //   // {label: 'name' , key : 'name'}
  //   // {label: 'name' , key : 'name'}
  //   // {label: 'name' , key : 'name'}
  // ];
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();

  }

      const exportExcel = (event) => {
              _exporter.current.save();      

    }

  // const handleExportWithMethod = (event) => {
  //   savePDF(contentArea.current, { paperSize: "A4" });
  // }
  return (
    <div className={s.root}>

      <Row>

        <Col sm={12}>

          <Widget
            // customDropDown
            title={<p className={"fw-bold text-warning"}>Listes des Stores</p>}
          >
            <div className='button-area'>
              {/* <Button style={{ backgroundColor: 'gray' }} >
                <CSVLink style={{ color: 'black' }} filename='Report.csv' headers={Headers} data={Stor}>CSV Export </CSVLink>
              </Button> */}
              <Button style={{ backgroundColor: 'gray' }}  onClick={exportExcel}>Excel Export</Button>

              <Button primary={true} style={{ backgroundColor: 'gray' }} onClick={handleExportWithComponent}>PDF Export</Button>
            </div>

            <div className="main" style={{
              display: "flex",
              height: "100 vh",
              width: "100%",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "100px",
            }}>
              <div className="search" style={{
                width: "30%",
              }}>

                <div className='searchInputs'>
                  <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    value={searchTerm}
                    fullWidth
                    label="Search Store"
                  />
                  <div className='searchIcon'>
                    <searchIcon />
                  </div>
                </div>

              </div>
            </div>
            <PDFExport ref={pdfExportComponent} paperSize='auto'>
            <ExcelExport ref ={_exporter}
            data={Stor}
            fileName="Stores.xlsx"
             >
        <ExcelExportColumn
          field="name"
          title="Name"
          locked={true}
          width={200}
        />
        <ExcelExportColumn
          field="activity_area"
          title="Secteur"
          width={350}
        />
        <ExcelExportColumn
          field="locality"
          title="Localité"
          width={350}
        />
        <ExcelExportColumn
          field="username"
          title="Username"
          width={350}
        />
        <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
        <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                <thead>
                  <tr>
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
                      Détails
                    </th>
                  </tr>
                </thead>

                <tbody className="text-dark">


                  {


                    Stor.filter(stores => searchTerm === "" || stores.name.toLowerCase() === searchTerm.toLowerCase() || stores.activity_area.toLowerCase().includes(searchTerm.toLowerCase()) || stores.name.toLowerCase().includes(searchTerm.toLowerCase())).map(store =>
                    (
                      <tr>
                        <td className={"pl-0 fw-normal text-center"}>{store.name}</td>
                        <td className={"pl-0 fw-normal text-center"}>{store.activity_area}</td>
                        <td className={"pl-0 fw-normal text-center"}>{store.locality}</td>
                        <td className={"pl-0 fw-normal text-center"}>{store.username}</td>
                        <td className={"pl-0 fw-normal text-center"}>{(store.creation_date).slice(0, 10)}</td>
                        <td className={"pl-0 fw-normal text-center"}>{store.amount}</td>
                        <td className={"pl-0 fw-normal text-center"}>{(store.last_update).slice(0, 10) + " " + "/" + " " + (store.last_update).slice(11, 16)}</td>
                        <td className={"pl-0 fw-normal text-center"}>
                          <Link to={`add/${store.id}`} style={{ fontSize: "20px", marginRight: "15px" }}><i class="text-success fa fa-edit"></i></Link>
                        </td>
                      </tr>
                    )

                    )}
                </tbody>

              </Table>
              </ExcelExport>
            </PDFExport>
          </Widget>
        </Col>
      </Row>

    </div>
  );

} export default ListStore;
