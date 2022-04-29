import React, {useState, useRef} from "react";
import { Row, Col, Table, Badge} from "reactstrap";
import Widget from "../../../components/Widget";
import s from "./Event.module.scss";
import {AddEvent} from "../../../administration/event/add";
import {validateEvent,deniedEvent} from "../../../controller/events";
import { getEvents } from "../../../controller/events";
import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-material/dist/all.css';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';


function ListEvent () {

  // constructor() {
  //   super();
  // }


 const promise = getEvents();
 const pdfExportComponent = useRef(null);
 const pdfExportComponentValid = useRef(null);
 const pdfExportComponentNonValid = useRef(null);
 const _exporter = useRef(null);

  // componentDidMount() {
  //   window.addEventListener("resize", this.forceUpdate.bind(this))
  // }

  // forceUpdate() {
  //   return this.setState({})
  // }

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();

  }
  const handleExportWithComponentValid = (event) => {
    pdfExportComponentValid.current.save();

  }
  const handleExportWithComponentNonValid = (event) => {
    pdfExportComponentNonValid.current.save();

  }

  

    promise.then((events) => {
      localStorage.setItem('events',JSON.stringify(events));
    });
    const events = JSON.parse(localStorage.getItem('events'));
    
    const [searchTerm, setSearchTerm] = useState('');

    const inputHandler = (e) => {
  
      var term = e.target.value;
      setSearchTerm(term);
    };
    
    const [searchTerme, setSearchTerme] = useState('');

    const inputHand = (e) => {
  
      var val = e.target.value;
      setSearchTerme(val);
    };
    const exportExcel = (event) => {
      _exporter.current.save();      
  
  }
    const [searchTer, setSearchTer] = useState('');

    const inputHan = (e) => {
  
      var tape = e.target.value;
      setSearchTer(tape);
    };

    return (

      <div className={s.root}>
        <Row>
          <Col sm={10} className="text-align:right"></Col>
          <Col sm={2} className="text-align:right">
            <Link to = "./add/Event">
            <Button  className="text-warning"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Créer <i class="fa fa-plus-circle"></i></Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-warning"}>Evenements en attente de validation</p>}
            >
           <div className='button-area'>             
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
                    onChange={inputHand}
                    variant="outlined"
                    value={searchTerme}
                    fullWidth
                    label="Search Store name"
                  />
                  <div className='searchIcon'>
                    <searchIcon />
                  </div>
                </div>
                </div>
              </div>
              <PDFExport ref={pdfExportComponent} paperSize='auto'>
           
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
                    events.filter(events => searchTerme === "" || events.name.toLowerCase() === searchTerme.toLowerCase() || events.category.toLowerCase().includes(searchTerme.toLowerCase())  || events.organizer.toLowerCase().includes(searchTerme.toLowerCase()) || events.name.toLowerCase().includes(searchTerme.toLowerCase())).map((event, index) => { 
                      if (event.status === 'waiting') {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date.slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.ending_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_start_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_end_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.category}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.account_id}</td>
                            <td className={"pl-0 text-warning fw-normal"}>{event.status}</td>
                            <td className={"pl-0 fw-normal"}>
                              <Button onClick={() => validateEvent(event.id)} style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-check-circle"></i></Button>
                              <Button onClick={() => deniedEvent(event.id)} style={{fontSize:"20px"}}><i class="text-danger fa fa-times-circle"></i></Button>
                            </td>                          
                          </tr>
                        );
                      }
                    })
                  }
                </tbody>
              </Table>
             
            </PDFExport>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-success"}>Evenements valides</p>}
            >
               <Button  style={{ backgroundColor: 'gray' }} onClick={exportExcel}>Excel Export</Button>
               <Button primary={true} style={{ backgroundColor: 'gray' }}  onClick={handleExportWithComponentValid}>Export</Button>
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
                    label="Search Event"
                  />
                  <div className='searchIcon'>
                    <searchIcon />
                  </div>
                </div>
                </div>
              </div>
              <PDFExport ref={pdfExportComponentValid} paperSize='auto'>
              <ExcelExport ref ={_exporter}
            data={events}
            fileName="Event.xlsx"
             >
        <ExcelExportColumn
          field="name"
          title="Name"
          locked={true}
          width={200}
        />
        <ExcelExportColumn
          field="organizer"
          title="Organisateur"
          width={350}
        />
        <ExcelExportColumn
          field="limit_registration"
          title="Nombre de Places"
          width={350}
        />
        <ExcelExportColumn
          field="category"
          title="Catégorie"
          width={350}
        />
         <ExcelExportColumn
          field="status"
          title="Statut"
          width={350}
        />
        <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
        <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
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
                    events.filter(events => searchTerm === "" || events.name.toLowerCase() === searchTerm.toLowerCase() || events.category.toLowerCase().includes(searchTerm.toLowerCase())  || events.organizer.toLowerCase().includes(searchTerm.toLowerCase()) || events.name.toLowerCase().includes(searchTerm.toLowerCase())).map((event, index) => { 
                      if (event.is_valid === true) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.starting_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.ending_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_start_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_end_date).slice(0,10)}</td>
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
              </ExcelExport>
              </PDFExport>
            </Widget>
          </Col>
        </Row> 


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-danger"}>Evenements non valides</p>}
            >
              <Button primary={true} style={{ backgroundColor: 'gray' }}  onClick={handleExportWithComponentNonValid}>Export</Button>
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
                    onChange={inputHan}
                    variant="outlined"
                    value={searchTer}
                    fullWidth
                    label="Search Store name"
                  />
                  <div className='searchIcon'>
                    <searchIcon />
                  </div>
                </div>
                </div>
              </div>
              <PDFExport ref={pdfExportComponentNonValid} paperSize='auto'>
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
                    events.filter(events => searchTer === "" || events.name.toLowerCase() === searchTer.toLowerCase() || events.category.toLowerCase().includes(searchTer.toLowerCase())  || events.organizer.toLowerCase().includes(searchTer.toLowerCase()) || events.name.toLowerCase().includes(searchTer.toLowerCase())).map((event, index) => { 
                      if (event.status !== 'waiting' && event.is_valid === false) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.starting_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.ending_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_start_date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(event.publishing_end_date).slice(0,10)}</td>
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
              </PDFExport>
            </Widget>
          </Col>
        </Row>

      </div>
    );
}

export default ListEvent;
