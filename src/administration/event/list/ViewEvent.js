import React  from "react";
import { Row, Col, Table } from "reactstrap";
import Widget from "../../../components/Widget";
import s from "./Event.module.scss";
import { getEvent } from "../../../controller/events";
import { useHistory} from 'react-router-dom';

const View = () => {

    const history = useHistory()
    const url2 = history.location.pathname;
    var bon = "";

    for (var i = 0; i < url2.length; i++) {

        if (url2[i] === "=")
            bon = i;

    }
    const id = parseInt(url2.slice(bon + 1));

    var data = getEvent(id);
    data.then((value) => {
        localStorage.setItem('event', JSON.stringify(value));
    
      });
      var ev = JSON.parse(localStorage.getItem('event'));

    console.log('****************event true*******************');
    console.log(ev); 
    

    return (

        <div className={s.root}>
            <Row>
                <Col sm={12}>
                    <Widget
                        customDropDown
                        title={<p className={"fw-bold text-warning"}>Event Details</p>}
                    >

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

                            </div>
                        </div>
                       
                            <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                                <thead>
                                    <tr>
                                        <th key={0} scope="col" className={"text-center pl-0"}>
                                            ID
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
                                        <th key={12} scope="col" className={"text-center pl-0"}>
                                            Détails
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-dark">
                                    {
                                //    ev.map((eve) => {
                                //             return (
                                                <tr>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.id}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.name}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.organizer}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.limit_registration}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.location + '(' + ev.city + ')'}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.starting_date.slice(0, 10)}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{(ev.ending_date).slice(0, 10)}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{(ev.publishing_start_date).slice(0, 10)}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{(ev.publishing_end_date).slice(0, 10)}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.category}</td>
                                                    <td className={"pl-0 fw-normal text-center"}>{ev.account_id}</td>
                                                    <td className={"pl-0 text-warning fw-normal"}>{ev.status}</td>
                                                   
                                                </tr>
                                        //     );
                                        // })
                                    }
                                </tbody>
                            </Table>
                    </Widget>
                </Col>
            </Row>
        </div>
    );




};
export default View