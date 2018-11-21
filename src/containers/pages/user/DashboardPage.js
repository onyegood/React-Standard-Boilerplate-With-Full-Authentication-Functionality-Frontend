import React, { Component } from 'react'
import Header from 'containers/layouts/Header';
import CountItem from 'components/includes/stats/CountItem';
import BarChartComponent from 'components/includes/chartjs/BarChartComponent';
import DoughnutChartComponent from 'components/includes/chartjs/DoughnutChartComponent';
import PieChartComponent from 'components/includes/chartjs/PieChartComponent';
import SideNavBar from 'containers/layouts/navs/SideNavBar';
import requireAuth from 'hoc/requireAuth';
import Breadcrumb from 'components/includes/breadcrumbs';
import Moment from 'react-moment';

import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardImg
} from 'reactstrap';


class DashboardPage extends Component {

  state = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [50, 10, 5, 2, 20, 30, 45],
    bg: ["#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd","#0277bd"],
    bg2: ["#2f9fd9","#0277bd"],
    labels2: ["Male", "Female"],
    values2: [500, 700]
  }
  render() {

    const {path} = this.props.match;
    console.log('Path', path.substr(path.lastIndexOf('/')))

    return (
      <div className="app-wrapper">
        {/* Side Nav*/}
        <SideNavBar />
        {/* Side Nav*/}

        {/* Main Content*/}
        <div className="content">
            {/* Top Nav*/}
            <Header />
            {/* Top Nav*/}
            
            {/*Breadcrumb
            <Breadcrumb />*/}

            <Container className="pt-4 pb-4 pl-4 pr-4">
                <Row>
                <Col md={{ size: 12 }}>
                    <h5><strong>Dashboard</strong></h5>
                    <p className="small">Today is - 
                    <Moment format="DD, MMMM YYYY">{Date.now()}</Moment>
                    </p>
                </Col>
                </Row>
            </Container>

            {/*Breadcrumb*/}
            <Container className="pb-4 pl-4 pr-4">
              <Row>
                  <CountItem 
                    src="assets/img/icons/ecommerce.svg"
                    alt="ecommerce"
                    title="Monthly sales"
                    count="2000"
                  />

                  <CountItem 
                    src="assets/img/icons/bar-chart.svg"
                    alt="ecommerce"
                    title="Monthly Profit"
                    count="2000"
                  />

                  <CountItem 
                    src="assets/img/icons/calendar.svg"
                    alt="ecommerce"
                    title="Monthly Events"
                    count="2000"
                  />

                  <CountItem 
                    src="assets/img/icons/group.svg"
                    alt="ecommerce"
                    title="Total Active User"
                    count="2000"
                  />
              </Row>

              <Row>
              <Col md={{size: 12}}>
                <p>Insight for Monthly Sales</p>
              </Col>
                        
              <Col md={{size: 9}}>
                <Card>
                  <CardBody>
                    <BarChartComponent 
                      labels={this.state.labels}
                      values={this.state.values}
                      bg={this.state.bg}
                    />
                  </CardBody>
                </Card>
              </Col>

              <Col md={{size: 3}}>
                <Card>
                  <CardBody>
                    <div className="stats">
                      <ul>
                        <li>Total Sale &nbsp;&nbsp;&nbsp;&nbsp; 20,3355</li>
                        <li>Total Profit &nbsp;&nbsp;&nbsp;&nbsp; 20,3355</li>
                        <li>Total Lost &nbsp;&nbsp;&nbsp;&nbsp; 20,3355</li>
                        <li>Total Stock &nbsp;&nbsp;&nbsp;&nbsp; 20,3355</li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              </Row>

              <Row className="mt-4">
                <Col md={{size: 12}}>
                  <p>Insight by Gender</p>
                </Col>
                <Col md={{size: 6}}>
                  <Card>
                    <CardBody>
                        <DoughnutChartComponent 
                        labels={this.state.labels2}
                        values={this.state.values2}
                        bg={this.state.bg2}
                      />
                    </CardBody>
                  </Card>
                </Col>

                <Col md={{size: 6}}>
                    <Card>
                      <CardBody>
                          <PieChartComponent 
                          labels={this.state.labels2}
                          values={this.state.values2}
                          bg={this.state.bg2}
                        />
                      </CardBody>
                    </Card>
                </Col>
              </Row>
            </Container>
        </div>
        {/* Main Content*/}
      </div>
    )
  }
}



export default requireAuth(DashboardPage)
