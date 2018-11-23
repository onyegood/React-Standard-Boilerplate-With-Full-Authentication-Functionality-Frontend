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
        count: '',
        icon: '',
        iconSize: '',
        iconColor: '',
        noIcon: false,
        noImage: false
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
                                alt={this.props.alt}
                                style={{display: `${this.props.noImage ? 'none' : ''}`}}
                                />
                                <i 
                                    className={`${this.props.icon}`} 
                                    style={{
                                        fontSize:`${this.props.iconSize}px`, 
                                        color: `${this.props.iconColor}`,
                                        display: `${this.props.noIcon ? 'none' : ''}`
                                    }}
                                />   
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