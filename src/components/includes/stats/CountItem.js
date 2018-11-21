import React,{Component} from 'react'
import {
    Col,
    Card,
    CardBody,
    Row
} from 'reactstrap';
class CountItem extends Component {
    static defaultProps ={
        src: '',
        alt: '',
        title: '',
        count: ''
    }
    render(){
        return (
            <Col md={{ size: 3 }}>
                <Card className="mb-4">
                <CardBody>
                    <div className="count-items">
                        <Row>
                            <Col sm={{size: 3}}>
                            <img
                                src={this.props.src} 
                                alt={this.props.alt}/>
                            </Col>
                            <Col sm={{size: 8}} style={{margin: 0, padding: 0}}>
                            <p className="small">
                            {this.props.title} <br/>
                            <span className="count-big">
                            {this.props.count}
                            </span>
                            </p>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
                </Card>
            </Col>
        )
    }
}

export default CountItem;