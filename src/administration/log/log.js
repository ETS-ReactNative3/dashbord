import React,{useRef} from 'react';
import {
  Row, Col, Table
} from 'reactstrap';
import { Link} from "react-router-dom";
import {getLogs} from "../../controller/logs";
import Widget from "../../components/Widget/Widget";
import s from './Logs.module.scss';
import {getLogById, statut} from "../../controller/logs";
import {getFullNameByUserId} from "../../controller/users";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';


function ListPartners () {
  

 const promise = getLogs();


    promise.then((Logs) => {
      localStorage.setItem('Logs',JSON.stringify(Logs.data));
    });
    const Logs = JSON.parse(localStorage.getItem('Logs'));

    // getNameByUserId (userId) {
    //     if(userId != 0 && userId != null) {
    //       if (localStorage.getItem('name'+userId) == null) {
    //         var promis = getFullNameByUserId(userId);
    //         promis.then((value) => {
    //           localStorage.setItem('name'+userId, value.data.fullname);
    //         })
    //       }
    //     }    
    //   }
    const pdfExportComponent = useRef(null);
  // const contentArea = useRef(null);
    const _exporter = useRef(null);

    const handleExportWithComponent = (event) => {
      pdfExportComponent.current.save();
  
    }
  
     const exportExcel = (event) => {
                _exporter.current.save();      
  
      }

    return (
        <div className={s.root}>
          <Row>
            <Col sm={10} className="text-align:right"></Col>
            <Col sm={2} className="text-align:right">
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Widget
                // customDropDown
                title={<p className={"fw-bold text-warning"}>La liste des Logs</p>}
              >
                 <div className='button-area'>
              {/* <Button style={{ backgroundColor: 'gray' }} >
                <CSVLink style={{ color: 'black' }} filename='Report.csv' headers={Headers} data={Stor}>CSV Export </CSVLink>
              </Button> */}
              <Link>
              <i   class= "fa fa-file-excel-o" onClick={exportExcel}> Export</i>
              </Link>
              <br />
              <Link>
              <i primary={true} class = "fa fa-file-pdf-o" onClick={handleExportWithComponent}>Export</i>
              </Link>
              
            </div>

            <PDFExport ref={pdfExportComponent} paperSize='auto'>
            <ExcelExport ref ={_exporter}
            data={Logs}
            fileName="log.xlsx"
             >
        <ExcelExportColumn
          field="id"
          title="ID"
          locked={true}
          width={200}
        />
        <ExcelExportColumn
          field="description"
          title="Description"
          width={350}
        />
        <ExcelExportColumn
          field="date"
          title="Date"
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
                       Id
                      </th>
                      <th key={2} scope="col" className={"text-center pl-0"}>
                        Phone
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Connexion
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Statut
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Date
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Heure
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        User
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    {
                      Logs && Logs.map((Log, index) => { 
                   
                            if (localStorage.getItem('name'+Log.user_id) == null) {
                              var promis = getFullNameByUserId(Log.user_id);
                              promis.then((value) => {
                                localStorage.setItem('name'+Log.user_id, value.data.fullname);
                              })
                            }
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{Log.id}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(Log.description).slice(7,19)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(Log.description).slice(20,40)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{statut[Log.statut]}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(Log.date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(Log.date).slice(11,19)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{localStorage.getItem('name'+Log.user_id) || 'Unknow'}</td>
                            <td className={"pl-0 fw-normal text-center"}>
                            <Link to={getLogById(Log.id)} style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-edit"></i></Link>
                            </td>                          
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </Table>
                </ExcelExport>
                </PDFExport>
              </Widget>
            </Col>
          </Row>
      
        </div>
    );
  
}

export default ListPartners;
