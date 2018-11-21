import React, {Component} from "react";
import { Scatter } from "react-chartjs-2";
class ScatterChartComponent extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    text: "",
    fontSize: 25
  };

  render() {
    return (
        <Scatter
          data={this.props.data}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.text,
              fontSize: this.props.titleFontSize
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000"
              }
            }
          }}
        />
    );
  }
}

export default ScatterChartComponent;