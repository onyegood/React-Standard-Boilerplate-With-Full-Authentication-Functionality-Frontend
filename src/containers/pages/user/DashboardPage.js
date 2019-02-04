import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Header from 'containers/layouts/Header';
import CountItem from 'components/includes/stats/CountItem';
import BarChartComponent from 'components/includes/chartjs/BarChartComponent';
import DoughnutChartComponent from 'components/includes/chartjs/DoughnutChartComponent';
import PieChartComponent from 'components/includes/chartjs/PieChartComponent';
import SideNavBar from 'containers/layouts/navs/SideNavBar';
import requireAuth from 'hoc/requireAuth';
import Moment from 'react-moment'; 
import {toast} from 'react-toastify';
import { Row, Col, Container, Card, CardBody} from 'reactstrap';
import { currency, number } from 'components/helpers';
import {data, data2} from 'components/includes/db';
import {barchartBG, bg2} from 'components/includes/chartjs/bg';

class DashboardPage extends Component {

  state = {
    labels: data.map(l => l.lebal),
    values: data.map(v => v.value),
    bg: barchartBG.map(b => b),
    bg2: bg2.map(b => b),
    labels2: data2.map(l => l.label),
    values2: data2.map(v => v.value)
  }

  componentWillMount = () => {
    if (this.props.message !== undefined) {
      setTimeout(() => {
        toast(this.props.message, { type: toast.TYPE.SUCCESS });
       }, 300);
    }
    
  };
  
  render() {
    
    const {path} = this.props.match;

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
            
            {/*Breadcrumb*/}
            <Container className="pt-4 pb-4 pl-4 pr-4">
                <Row>
                <Col md={{ size: 12 }} className="breadcrub">
                    <h5><strong>Home{path !== '/' ? path : null }</strong></h5>
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
                    src=""
                    alt=""
                    noImage={true}
                    icon="ion-ios-cart"
                    iconSize="42"
                    iconColor="#91c9ff"
                    noIcon={false}
                    title="Monthly sales"
                    count={currency.format(1030245)}
                  />

                  <CountItem 
                    src=""
                    alt=""
                    noImage={true}
                    icon="ion-ios-cash"
                    iconSize="42"
                    iconColor="#91c9ff"
                    noIcon={false}
                    title="Monthly Profit"
                    count={currency.format(502013)}
                  />

                  <CountItem 
                    src=""
                    alt=""
                    noImage={false}
                    icon="ion-ios-podium"
                    iconSize="42"
                    iconColor="#91c9ff"
                    noIcon={true}
                    title="Monthly Events"
                    count={number.format(20000)}
                  />

                  <CountItem 
                    src=""
                    alt=""
                    noImage={true}
                    icon="ion-ios-people"
                    iconSize="42"
                    iconColor="#91c9ff"
                    noIcon={false}
                    title="Total Active User"
                    count={number.format(1500)}
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
                      displayLegend={false}
                      displayTitle={false}
                      legendPosition='left'
                      titleText='Distribution By Gender'
                      titleFontSize={20}
                      height={120}
                    />
                  </CardBody>
                </Card>
              </Col>

              <Col md={{size: 3}}>
                <Card>
                  <CardBody>
                    <div className="stats">
                      <ul>
                        <li>Total Sale &nbsp;&nbsp;&nbsp;&nbsp; {currency.format(203355)}</li>
                        <li>Total Profit &nbsp;&nbsp;&nbsp;&nbsp; {currency.format(122445)}</li>
                        <li>Total Lost &nbsp;&nbsp;&nbsp;&nbsp; {currency.format(10334)}</li>
                        <li>Total Stock &nbsp;&nbsp;&nbsp;&nbsp; {currency.format(299445)}</li>
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
                        labels={this.state.labels2} //Data source labels
                        values={this.state.values2} //Data source Values
                        displayLegend={true}
                        displayTitle={false}
                        legendPosition='right'
                        titleText='Distribution By Gender'
                        titleFontSize={20}
                        height={120}
                        bg={this.state.bg2}
                      />
                    </CardBody>
                  </Card>
                </Col>

                <Col md={{size: 6}}>
                    <Card>
                      <CardBody>
                          <PieChartComponent 
                          labels={this.state.labels2} //Data source labels
                          values={this.state.values2} //Data source Values
                          displayLegend={true}
                          displayTitle={false}
                          legendPosition='right'
                          titleText='Distribution By Gender'
                          titleFontSize={20}
                          height={120}
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

const mapStateToProps =(state) => {
  return {
    message: state.message.message
  }
}

export default compose(
  connect(mapStateToProps)
)(requireAuth(DashboardPage))