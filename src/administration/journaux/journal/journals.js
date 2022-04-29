import React, {useRef} from 'react';
import {
  Row, Col,Table,
} from 'reactstrap';
import { Link} from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import {getJournals} from '../../../controller/journal';
import Widget from "../../../components/Widget/Widget";
import 'react-toastify/dist/ReactToastify.css';
import s from './journals.module.scss';
import {getJournalByStatus} from "../../../controller/journal"; 
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';



function ListPartners () {
  

 const promise = getJournals();
  

    promise.then((journals) => {
      localStorage.setItem('journals',JSON.stringify(journals.data));
    });
    const journals = JSON.parse(localStorage.getItem('journals'));

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
            <Col sm={12}>
              <Widget
                // customDropDown
                title={<p className={"fw-bold text-warning"}>Fichier de journalisation</p>}
              >
                <div className='button-area'>
              {/* <Button style={{ backgroundColor: 'gray' }} >
                <CSVLink style={{ color: 'black' }} filename='Report.csv' headers={Headers} data={Stor}>CSV Export </CSVLink>
              </Button> */}
              <Button style={{ backgroundColor: 'gray' }} onClick={exportExcel}>Excel Export</Button>

              <Button primary={true} style={{ backgroundColor: 'gray' }} onClick={handleExportWithComponent}>PDF Export</Button>
            </div>
            <PDFExport ref={pdfExportComponent} paperSize='auto'>
            <ExcelExport ref ={_exporter}
            data={journals}
            fileName="journal.xlsx"
             >
        <ExcelExportColumn
          field="amount"
          title="Montant"
          locked={true}
          width={200}
        />
        <ExcelExportColumn
          field="Phone"
          title="Phone"
          width={350}
        />
        <ExcelExportColumn
          field="date"
          title="Date"
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
                       Id
                      </th>
                      {/* <th key={2} scope="col" className={"text-center pl-0"}>
                       Number
                      </th> */}
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Montant
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Numéro
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Date
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Heure
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Statut
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Message
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Type Journal
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Id compte
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Id transaction
                      </th>
                      {/* <th key={3} scope="col" className={"text-center pl-0"}>
                        Last update date
                      </th>
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        heure
                      </th> */}
                      <th key={3} scope="col" className={"text-center pl-0"}>
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    {
                      journals && journals.map((journal, index) => { 
                     return ( 
                          <tr key={index++}>
                              
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.id}</td>
                            {/* <td className={"pl-0 fw-normal text-center"}>{journal.number}</td> */}
                            <td className={"pl-0 fw-normal text-center"}>{journal.amount}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.phone}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(journal.date).slice(0,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(journal.date).slice(11,19)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.status}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.message}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.journal_type_id}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.account_id}</td>
                            <td className={"pl-0 fw-normal text-center"}>{journal.transaction_id}</td>
                            {/* <td className={"pl-0 fw-normal text-center"}>{(journal.last_update).slice(1,10)}</td>
                            <td className={"pl-0 fw-normal text-center"}>{(journal.last_update)}</td> */}
                            <td className={"pl-0 fw-normal text-center"}>
                            <Link to={`add/${journal.id}`} style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-edit"></i></Link>
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
