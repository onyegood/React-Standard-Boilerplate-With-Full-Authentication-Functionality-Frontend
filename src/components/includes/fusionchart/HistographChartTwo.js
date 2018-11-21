import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts.addDep(charts));


class HistographChartTwo extends Component {
   render() {
      return (
      <ReactFusioncharts
         type={'stackedcolumn2dline'}
         width ={'100%'}
         height={'70%'}
         dataFormat = "JSON"
         dataSource = {this.props.dataSource} />
      );
   }
}

export default HistographChartTwo;