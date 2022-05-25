import React  from "react";
import { Row, Col, Table} from "reactstrap";
import Widget from "../../../components/Widget";
import s from "./Administrator.module.scss";
import { getSingleAdministrator } from "../../../controller/administrator";
import { useHistory, Link} from 'react-router-dom';


const ViewAdmin = () => {

    const history = useHistory()
    const url2 = history.location.pathname;
    var bon = "";

    for (var i = 0; i < url2.length; i++) {

        if (url2[i] === "=")
            bon = i;

    }
    const id = parseInt(url2.slice(bon + 1));

    var data = getSingleAdministrator(id);

    data.then((value) => {
        localStorage.setItem('Administrator', JSON.stringify(value));
    
      });
      var admin= JSON.parse(localStorage.getItem('Administrator'));
    
    console.log("***********************Administrators******************");
    console.log(admin);
    return (

        <div className={s.root}>
            <Row>
                <Col sm={12}>
                    <Widget
                        customDropDown
                        title={<p className={"fw-bold text-warning"}>Admin Details</p>}
                    >
<Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
                                <thead>
                                <tr>
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
                                   admin && admin.map((adm) => {
                                            return (
                                                <tr>
                            <td className={"pl-0 fw-normal text-center"}>{adm.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{adm.username}</td>
                            <td className={"pl-0 fw-normal text-center"}>{adm.contact}</td>
                            <td className={"pl-0 fw-normal text-center"}>{adm.level}</td>                
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




};
export default ViewAdmin;