import React from 'react'
import Moment from 'react-moment';
import {capitalize} from 'components/helpers';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
export default(props) => {
  return (
    <Container className="pt-4 pb-4 pl-4 pr-4">
        <Row>
        <Col md={{ size: 12 }}>
            <h5><strong>{capitalize(props.page)}</strong></h5>
            <p className="small">Today is - 
            <Moment format="DD, MMMM YYYY">{Date.now()}</Moment>
            </p>
        </Col>
        </Row>
    </Container>
  )
}
