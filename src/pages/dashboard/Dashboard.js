import React, { useState } from "react";
import { Row, Col, Table } from "reactstrap";
// import { ProgressBar } from 'react-bootstrap';

//for search
import cx from "classnames";
import search from "../../images/search.svg";
import {

  InputGroupAddon,
  InputGroup,
  Input,
  Form,
 
} from "reactstrap";

import usersImg from "../../images/usersImg.svg";
import smileImg from "../../images/smileImg.svg";
import totalSale from "../../images/total-sale.svg";
import orders from "../../images/orders.svg";
import stocksImg from "../../images/stocks.svg";
import stocksDownImg from "../../images/stocksDown.svg";
import getTransactions from "../../controller/transactions";
import getAccounts, {TypeAccount} from "../../controller/accounts";
import getUsers, {statusName, hasProfessionalAccount} from "../../controller/users";
import { getFullNameByUserId, getFullNameByAccountId } from "../../controller/users";

import { chartData } from "./chartsMock";

import Widget from "../../components/Widget";

import s from "./Dashboard.module.scss";
import ApexChart from "react-apexcharts";

//people
import p1 from "../../images/people/p1.png";
import p2 from "../../images/people/p2.png";
import p3 from "../../images/people/p3.png";
import p4 from "../../images/people/p4.png";
import p5 from "../../images/userAvatar.png";

export var sommeDepot=0, nbdepot=0, montantTransaction=0, sommeAchat=0, nbVente=0, sommeVente=0, nbAchat=0, nbretrait=0, nbtrans=0, sommeTrans=0, sommeRetrait=0, nbUser=0, sommeTranfer=0, nbComptClassic=0, nbComptPro =0;





const orderValueOverride = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 173, 1, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};


var typeTransaction = {
  1: "Dépot",
  2: "Transfert",
  3: "Achat",
  4: "Vente"
} 

const convertionRateOverride = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(246, 121, 93, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(252, 215, 206, .25)"]
    },
    colors: ["rgba(246, 121, 93)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2 = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(255, 230, 179, .25)"]
    },
    colors: ["rgba(255, 173, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const splineArea = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["rgba(255, 205, 101, .2)", 'rgba(0,0,0,0)'],
      type: 'solid'
    },
    colors: ["#FFBF69", "#323232"],
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

class Dashboard extends React.Component {

  constructor() {


    super();
    this.forceUpdate = this.forceUpdate.bind(this)
  }
  state = {
    orderValue: { ...chartData.apex.column, ...orderValueOverride },
    convertionRate: { ...chartData.apex.column, ...convertionRateOverride },
    area: { ...area },
    area2: { ...area2 },
    splineArea: { ...splineArea },
    transactions: [],
  };

  transactions= getTransactions();
  accounts= getAccounts();
  users = getUsers();
  
  name = '';





  getNameByAccountId (accountId) {
    if(accountId != 0 && accountId != null) {
      if (localStorage.getItem('name'+accountId) == null) {
        var promise = getFullNameByAccountId(accountId);
        promise.then((value) => {
          localStorage.setItem('name'+accountId, value.data.fullname);
        });
      }
    }
  }

  getNameByUserId (userId) {
    if(userId != 0 && userId != null) {
      if (localStorage.getItem('name'+userId) == null) {
        var promise = getFullNameByUserId(userId);
        promise.then((value) => {
          localStorage.setItem('name'+userId, value.data.fullname);
        });
      }
    }    
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {

    //operation sur les utilisateurs
    this.users.then((value) => {
      localStorage.setItem('users',JSON.stringify(value.data));
    });
    const respons = JSON.parse(localStorage.getItem('users'));
    
    {
      nbUser = 0;  
      respons && respons.map((user, index) => {   
        nbUser++;  
      })       
    }


//operations sur les transactions
    this.transactions.then((value) => {
      localStorage.setItem('transactions',JSON.stringify(value.data));
    });
    const response = JSON.parse(localStorage.getItem('transactions'));
    {
      nbdepot=0;
      sommeDepot=0;
      nbtrans=0;
      sommeTrans=0;
      nbAchat=0;
      montantTransaction=0;
      sommeAchat=0;
      nbAchat=0;
      sommeVente=0;
      response.map((transaction, index) => { 
      montantTransaction +=transaction.amount; 
      if(typeTransaction[transaction.transaction_type_id]==="Dépot") {
        nbdepot++;
        sommeDepot= sommeDepot + transaction.amount;
      }else if(typeTransaction[transaction.transaction_type_id]==="Transfert") {
        nbtrans++;
        sommeTrans= sommeTrans + transaction.amount;
      } else if(typeTransaction[transaction.transaction_type_id]==="Achat"){
          nbAchat++;
          sommeAchat= sommeAchat + transaction.amount;
      } else{
        nbVente++;
        sommeVente= sommeVente + transaction.amount;
      }
    })}     
   
console.log("montant des transactions",montantTransaction-sommeAchat);
    
// operations sur les comptes
    this.accounts.then((value) => {
      localStorage.setItem('accounts',JSON.stringify(value.data));
    });
    const reponse = JSON.parse(localStorage.getItem('accounts'));
    {
      nbComptClassic = 0;
      nbComptPro = 0;
      
      response && reponse.map((account, index) => { 

        if(TypeAccount[account.account_type_id] == "Classique"){
          nbComptClassic++
        }
        else{ nbComptPro++}  
      })
    } 

    
    return (


      <div className={s.root}>
        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}> Montant Depots</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h6 className={"fw-semi-bold mb-0"}>{sommeDepot} F CFA</h6>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>{(sommeDepot*100/montantTransaction).toFixed(2)} %</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.orderValue.series}
                    options={this.state.orderValue.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Montant Retrait</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h6 className={"fw-semi-bold mb-0"}>{sommeRetrait} F CFA</h6>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>{(sommeRetrait*100/montantTransaction).toFixed(2)} %</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.convertionRate.series}
                    options={this.state.convertionRate.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>


          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}> Utilisateurs </p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h6 className={"fw-semi-bold mb-0"}>{nbUser}</h6>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  {/* <img src={stocksImg} alt="" className={"mr-1"} /> */}
                  {/* <p className={"text-success mb-0"}>{(sommeAchat*100/montantTransaction).toFixed(2)} %</p> */}
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.convertionRate.series}
                    options={this.state.convertionRate.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>

          {/* <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={usersImg} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>5873</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h6 className={"fw-thin pt-1 mb-0"}>Classique</h6>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={smileImg} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>6452</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h6 className={"fw-thin pt-1 mb-0"}>Professionel</h6>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col> */}
        </Row>

        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Montant Transferts</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h6 className={"fw-semi-bold mb-0"}>{sommeTrans} F CFA</h6>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>{(sommeTrans*100/montantTransaction).toFixed(2)} %</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area.series}
                    options={this.state.area.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Comissions Intercash</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h6 className={"fw-semi-bold mb-0"}>{sommeVente}</h6>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>{(sommeVente*100/montantTransaction).toFixed(2)} %</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area2.series}
                    options={this.state.area2.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>

          <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={usersImg} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>{nbComptClassic}</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h6 className={"fw-thin pt-1 mb-0"}> Classique</h6>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>{(nbComptClassic*100/reponse.length).toFixed(2)} %</p>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={smileImg} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>{nbComptPro}</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h6 className={"fw-thin pt-1 mb-0"}>Professionel</h6>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>{(nbComptPro*100/reponse.length).toFixed(2)} %</p>
                </Col>
              </Row>
            </Widget>
          </Col>


          {/* <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={totalSale} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>$92k</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Sales</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={orders} alt="" style={{ paddingTop: 30 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>3240</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Orders</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksDownImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-danger mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col> */}
        </Row>


        <Row>
          <Col xl={8}>
            <Widget
              title={
                <Row>
                  <Col xs={12} sm={5}>
                    <p style={{ fontWeight: 700 }}>Transactions du jour</p>
                  </Col>
                  <Col xs={12} sm={7}>
                    <div className="chart-legend" />
                  </Col>
                </Row>
              }
              customDropDown
            >
              <Row className={s.dailyLineChart}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    series={this.state.splineArea.series}
                    options={this.state.splineArea.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Operations du jour</p>}
              customDropDown
            >
              <Row
                className={`${s.row} justify-content-center`}
                noGutters
                style={{ marginBottom: 30, marginTop: 24 }}
              >
                <ApexChart
                  className="sparkline-chart"
                  type={"donut"}
                  height={180}
                  series={chartData.apex.pie.series}
                  options={chartData.apex.pie.options}
                />
              </Row>
              <Row className={`justify-content-between`}>
                <Col sm={4}>
                  <div className={`${s.pieElementsDanger} ${s.pieElements}`}>
                    <h4 className={"mt-3 mb-1"}>{nbdepot}</h4>
                    <p>Depots</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElementsDanger} ${s.pieElements}`}>
                    <h4 className={"mt-3 mb-1"}>{nbAchat}</h4>
                    <p>Achats</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElementsDanger} ${s.pieElements}`}>
                    <h4 className={"mt-3 mb-1"}>{nbVente}</h4>
                    <p>Ventes</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElementsWarning} ${s.pieElements}`}>
                    <h4 className={"mt-3 mb-1"}>{nbretrait}</h4>
                    <p>Retraits</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElementsBlack} ${s.pieElements}`}>
                    <h4 className={"mt-3 mb-1"}>{nbtrans}</h4>
                    <p>Transferts</p>
                  </div>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold"}>Utilisateurs Intercash</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
              <div style={{height:'500px', overflow: 'scroll'}}>
              <Form className={`d-md-down-none`} inline>
          <InputGroup
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            // className={`${cx("input-group-no-border", { focus: !!focus })}`}
          >
            <Input
              id="search-input"
              placeholder="Search"
              // className={`${cx({ focus: !!focus})} ${s.headerSearchInput}`}
              style={{ borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
            />
            <InputGroupAddon addonType={"prepend"}>
              <img
                src={search}
                alt="search"
                width="24px"
                height="23px"
                style={{ marginRight: 12 }}
              />
            </InputGroupAddon>
          </InputGroup>
        </Form>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} >
                     No
                    </th>
                    <th style={{ textAlign: "center" }} >
                    ID
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Nom 
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Prénom (s)
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Numéro 
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Pays
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Points de fidélités
                    </th>                 
                    <th style={{ textAlign: "center" }} >
                      Types de comptes
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Statut
                    </th>
                  </tr>
                </thead>
                
                
                
                <tbody className="text-dark">
                 
                {
                    respons && respons.map((user, index) => {           
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td style={{ textAlign: "center" }} >{user.id}</td>
                            <td style={{ textAlign: "center" }} >{user.last_name}</td>
                            <td style={{ textAlign: "center" }} >{user.first_name}</td>
                            <td style={{ textAlign: "center" }} >{user.phone}</td>
                            <td style={{ textAlign: "center" }} >{user.country}</td>
                            <td style={{ textAlign: "center" }} >{user.fidelity_points}</td>
                            <td style={{ textAlign: "center" }} >{hasProfessionalAccount[user.has_professional_account]}</td>                        
                            <td style={{ textAlign: "center" }} >{ statusName[user.is_active]}</td> 
                            
                          </tr>
                        );
                    })
                  }  
                </tbody>
                </div>
                
              </Table>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold"}>Transactions</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
              <div style={{height:'500px', overflow: 'scroll'}}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} >
                     No
                    </th>
                    <th style={{ textAlign: "center" }} >
                    ID
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Montant
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Envoyeur
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Numéro Envoyeur
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Bénéficiaire
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Numéro Bénéficiaire
                    </th>
                    <th style={{ textAlign: "center" }}>
                      Date transaction
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Heure transaction
                    </th>
                    <th style={{ textAlign: "center" }} >
                      Type transaction
                    </th>
                  </tr>
                </thead>
                
                
                
                <tbody className="text-dark">
                 
                {
                    response && response.map((transaction, index) => {
                      this.getNameByAccountId(transaction.sender_account_id);
                      this.getNameByAccountId(transaction.receiver_account_id);
                      return ( 
                        <tr key={index++}>
                          <td scope='row'>{index}</td>
                          <td style={{ textAlign: "center" }} >{transaction.id}</td>
                          <td style={{ textAlign: "center" }} >{transaction.amount}F CFA</td>
                          <td style={{ textAlign: "center" }} >{localStorage.getItem('name'+transaction.sender_account_id) || 'Unknow'}</td>
                          <td style={{ textAlign: "center" }} >{transaction.sender_phone}</td>
                          <td style={{ textAlign: "center" }} >{localStorage.getItem('name'+transaction.receiver_account_id) || 'Unknow'}</td>
                          <td style={{ textAlign: "center" }} >{transaction.receiver_phone}</td>
                          <td style={{ textAlign: "center" }} >{(transaction.creation_date).slice(0, 10)}</td>
                          <td style={{ textAlign: "center" }} >{(transaction.creation_date).slice(11, 19)}</td>
                          <td style={{ textAlign: "center" }} >{typeTransaction[transaction.transaction_type_id]}</td>                   
                        </tr>
                      );
                    })
                  }  
                </tbody>
                </div>
                
              </Table>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold"}>Comptes</p>}
            >
              <Table className={"table-hover table-bordered table-striped table-lg mt-lg mb-0"} borderless responsive>
              <div style={{height:'500px'}}>
                <thead style={{ overflow: 'auto'}}>
                  <tr>
                    <th style={{ textAlign: "center" }}>
                      No
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Compte ID
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Utilisateur
                    </th>
                    <th kstyle={{ textAlign: "center" }}>
                    Solde
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Date Création
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Heure création
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Dernière opération
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Heure derniere opération
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Limite de transaction
                    </th>
                    <th style={{ textAlign: "center" }}>
                    Type de compte
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark" style={{ overflow: 'auto'}}>

                {
                    reponse && reponse.map((account, index) => {   
                      this.getNameByUserId(account.user_id);
                      return(
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td style={{ textAlign: "center" }}>{account.id}</td>
                            <td style={{ textAlign: "center" }}>{localStorage.getItem('name'+account.user_id) || 'Unknow'}</td>
                            <td style={{ textAlign: "center" }}>{account.amount}F CFA</td>
                            <td style={{ textAlign: "center" }}>{(account.creation_date).slice(0,10)}</td>
                            <td style={{ textAlign: "center" }}>{(account.creation_date).slice(11,18)}</td>
                            <td style={{ textAlign: "center" }}>{(account.last_update).slice(0,10)}</td>
                            <td style={{ textAlign: "center" }}>{(account.creation_date).slice(11,18)}</td>
                            <td style={{ textAlign: "center" }}>{account.stop_amount}F CFA</td>
                            <td style={{ textAlign: "center" }}>{TypeAccount[account.account_type_id]}</td>                  
                          </tr>
                        );   
                      })            
                  }
                </tbody>
                </div>
              </Table>
            </Widget>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold"}>Comptes</p>}
            >
              <Table className={"mb-0"} borderless responsive>
                <thead>
                  <tr>
                    <th key={0} scope="col" className={"pl-0"}>
                      Plafond
                    </th>
                    <th key={1} scope="col" className={"pl-0"}>
                      Utilisateur
                    </th>
                    <th key={2} scope="col" className={"pl-0"}>
                      Derniere modification
                    </th>
                    <th key={3} scope="col" className={"pl-0"}>
                      Montant
                    </th>
                    <th key={4} scope="col" className={"pl-0"}>
                      Type de compte
                    </th>
                    <th key={5} scope="col" className={"pl-0"}>
                      Tracking
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  <tr key={0}>
                    <td className="fw-thin pl-0 fw-thin">
                      <i className={`fa fa-circle text-success mr-3`} />
                      #003486
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p1} alt="" className={"mr-3"} />
                      Kate Claus
                    </td>
                    <td className={"pl-0 fw-thin"}>10 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$8400</td>
                    <td className={"pl-0 text-success fw-normal"}>
                      On Delivery
                    </td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={1}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-success mr-3`} />
                      #004326
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p2} alt="" className={"mr-3"} />
                      Maria Gordon
                    </td>
                    <td className={"pl-0 fw-thin"}>08 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$8400</td>
                    <td className={"pl-0 text-success fw-normal"}>
                      On Delivery
                    </td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={2}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #001258
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p3} alt="" className={"mr-3"} />
                      Nick Peru
                    </td>
                    <td className={"pl-0 fw-thin"}>05 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$1300</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={3}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #0014176
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p4} alt="" className={"mr-3"} />
                      Lian Robinson
                    </td>
                    <td className={"pl-0 fw-thin"}>20 Dec 2019</td>
                    <td className={"pl-0 fw-normal"}>$880</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={4}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #0014177
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img
                        src={p5}
                        alt=""
                        className={"mr-3"}
                        width={"34px"}
                        height={"34px"}
                      />
                      Sam Fisher
                    </td>
                    <td className={"pl-0 fw-thin"}>16 Dec 2019</td>
                    <td className={"pl-0 fw-normal"}>$9400</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row> */}

      </div>
      );
  }
}

export default Dashboard;
