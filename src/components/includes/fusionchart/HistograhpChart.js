import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts.addDep(charts));


class HistograhpChart extends Component {
   render() {
      return (
      <ReactFusioncharts
         type={'mscolumn2d'}
         width ={'100%'}
         height={'100%'}
         dataFormat = "JSON"
         dataSource = {this.props.dataSource} />
      );
   }
}

export default HistograhpChart;