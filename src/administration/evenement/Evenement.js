import React from "react";
import { Row, Col, Table,  Button, Badge } from "reactstrap";
import { chartData } from "./chartsMock";
import Widget from "../../components/Widget";
import s from "./Evenement.module.scss";


import { getEvents, getEvent } from "../../controller/events";

// import ApexChart from "react-apexcharts";
// import usersImg from "../../images/usersImg.svg";
// import smileImg from "../../images/smileImg.svg";
// import totalSale from "../../images/total-sale.svg";
// import orders from "../../images/orders.svg";
// import stocksImg from "../../images/stocks.svg";
// import stocksDownImg from "../../images/stocksDown.svg";
//people
// import p1 from "../../images/people/p1.png";
// import p2 from "../../images/people/p2.png";
// import p3 from "../../images/people/p3.png";
// import p4 from "../../images/people/p4.png";
// import p5 from "../../images/userAvatar.png";



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

class Evenement extends React.Component {
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
  };

  status = ['wating', 'inprogress']
  promise = getEvents();
  

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    this.promise.then((events) => {
      localStorage.setItem('events',JSON.stringify(events.data));
    });
    const events = JSON.parse(localStorage.getItem('events'));

    return (
      <div className={s.root}>
        <Row>
          <Col sm={10} className="text-align:right"></Col>
          <Col sm={2} className="text-align:right">
            <Button  className="text-warning" href="#"  style={{fontSize:"20px", marginBottom:"10px", background:"black"}}> Creer <i class="fa fa-plus-circle"></i></Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-warning"}>Evenements en attente de validation</p>}
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
                    events && events.map((event, index) => { 
                      if (event.status === 'waiting') {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date.toString()}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.category}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.account_id}</td>
                            <td className={"pl-0 text-warning fw-normal"}>{event.status}</td>
                            <td className={"pl-0 fw-normal"}>
                              <a href="#" style={{fontSize:"20px", marginRight:"15px"}}><i class="text-success fa fa-check-circle"></i></a>
                              <a href="#" style={{fontSize:"20px"}}><i class="text-danger fa fa-times-circle"></i></a>
                            </td>                          
                          </tr>
                        );
                      }
                    })
                  }
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-success"}>Evenements valides</p>}
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
                    events && events.map((event, index) => { 
                      if (event.is_valid === 1) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
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
            </Widget>
          </Col>
        </Row> 


        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold text-danger"}>Evenements non valides</p>}
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
                    events && events.map((event, index) => { 
                      if (event.status !== 'waiting' && event.is_valid === 0) {
                        return ( 
                          <tr key={index++}>
                            <td scope='row'>{index}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.name}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.organizer}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.limit_registration}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.location +'('+event.city+')'}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.starting_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.ending_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_start_date}</td>
                            <td className={"pl-0 fw-normal text-center"}>{event.publishing_end_date}</td>
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
            </Widget>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Evenement;
