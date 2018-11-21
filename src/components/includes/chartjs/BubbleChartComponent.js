import React, {Component} from "react";
import {Bubble} from "react-chartjs-2";
class BubbleChartComponent extends Component {
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        titleText: '',
        titleFontSize: 25,
        height: 120,
        labels: [],
        values: [],
        bg: []
    }

    render(){

        return (
        <Bubble
            data={{
                labels: this.props.labels,
                datasets: [
                {
                    label: "Total ",
                    data: this.props.values,
                    backgroundColor: this.props.bg,
                    borderWidth: 0,
                    borderColor: "#777",
                    hoverBorderColor: "#777",
                    hoverBorderWidth: 1
                }]
            }} 
             options={{ 
                 title:{
                    display: this.props.displayTitle,
                    text: this.props.titleText,
                    fontSize: this.props.titleFontSize
                },
                legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                    labels: {
                        fontColor: '#000'
                    }
                }
            }} />
        )
    }
}

export default BubbleChartComponent;