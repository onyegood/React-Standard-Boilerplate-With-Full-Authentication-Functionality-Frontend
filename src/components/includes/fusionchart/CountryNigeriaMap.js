import React, { Component } from "react";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Maps from 'fusioncharts/fusioncharts.maps';
import NigeriaMap from 'fusioncharts/maps/fusioncharts.usa';
import ReactFC from 'react-fusioncharts';


var countryData = {
    // "chart": {
    //     "caption": "Annual Sales by State",
    //         "subcaption": "Last year",
    //             "entityFillHoverColor": "#cccccc",
    //                 "numberScaleValue": "1,1000,1000",
    //                     "numberScaleUnit": "K,M,B",
    //                         "numberPrefix": "$",
    //                             "showLabels": "1",
    //                                 "theme": "ocean"
    // },
    // "colorrange": {
    //     "minvalue": "0",
    //         "startlabel": "Low",
    //             "endlabel": "High",
    //                 "code": "#e44a00",
    //                     "gradient": "1",
    //                         "color": [
    //                             {
    //                                 "maxvalue": "56580",
    //                                 "displayvalue": "Average",
    //                                 "code": "#f8bd19"
    //                             },
    //                             {
    //                                 "maxvalue": "100000",
    //                                 "code": "#6baa01"
    //                             }
    //                         ]
    // },
    // "HI": [
    //     {
    //         "id": "NG.AN",
    //         "value": "3189",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "NG.ZA",
    //         "value": "2879",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "MD",
    //         "value": "920",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "DE",
    //         "value": "4607",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "RI",
    //         "value": "4890",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "WA",
    //         "value": "34927",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "OR",
    //         "value": "65798",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "CA",
    //         "value": "61861",
    //         "label": "",
    //         "shortLabel": ""
    //     },
    //     {
    //         "id": "AK",
    //         "value": "58911"
    //     },
    //     {
    //         "id": "ID",
    //         "value": "42662"
    //     },
    //     {
    //         "id": "NV",
    //         "value": "78041"
    //     },
    //     {
    //         "id": "AZ",
    //         "value": "41558"
    //     },
    //     {
    //         "id": "MT",
    //         "value": "62942"
    //     },
    //     {
    //         "id": "WY",
    //         "value": "78834"
    //     },
    //     {
    //         "id": "UT",
    //         "value": "50512"
    //     },
    //     {
    //         "id": "CO",
    //         "value": "73026"
    //     },
    //     {
    //         "id": "NM",
    //         "value": "78865"
    //     },
    //     {
    //         "id": "ND",
    //         "value": "50554"
    //     },
    //     {
    //         "id": "SD",
    //         "value": "35922"
    //     },
    //     {
    //         "id": "NE",
    //         "value": "43736"
    //     },
    //     {
    //         "id": "KS",
    //         "value": "32681"
    //     },
    //     {
    //         "id": "OK",
    //         "value": "79038"
    //     },
    //     {
    //         "id": "TX",
    //         "value": "75425"
    //     },
    //     {
    //         "id": "MN",
    //         "value": "43485"
    //     },
    //     {
    //         "id": "IA",
    //         "value": "46515"
    //     },
    //     {
    //         "id": "MO",
    //         "value": "63715"
    //     },
    //     {
    //         "id": "AR",
    //         "value": "34497"
    //     },
    //     {
    //         "id": "LA",
    //         "value": "70706"
    //     },
    //     {
    //         "id": "WI",
    //         "value": "42382"
    //     },
    //     {
    //         "id": "IL",
    //         "value": "73202"
    //     },
    //     {
    //         "id": "KY",
    //         "value": "79118"
    //     },
    //     {
    //         "id": "TN",
    //         "value": "44657"
    //     },
    //     {
    //         "id": "MS",
    //         "value": "66205"
    //     },
    //     {
    //         "id": "AL",
    //         "value": "75873"
    //     },
    //     {
    //         "id": "GA",
    //         "value": "76895"
    //     },
    //     {
    //         "id": "MI",
    //         "value": "67695"
    //     },
    //     {
    //         "id": "IN",
    //         "value": "33592"
    //     },
    //     {
    //         "id": "OH",
    //         "value": "32960"
    //     },
    //     {
    //         "id": "PA",
    //         "value": "54346"
    //     },
    //     {
    //         "id": "NY",
    //         "value": "42828"
    //     },
    //     {
    //         "id": "VT",
    //         "value": "77411"
    //     },
    //     {
    //         "id": "NH",
    //         "value": "51403"
    //     },
    //     {
    //         "id": "ME",
    //         "value": "64636"
    //     },
    //     {
    //         "id": "MA",
    //         "value": "51767"
    //     },
    //     {
    //         "id": "CT",
    //         "value": "57353"
    //     },
    //     {
    //         "id": "NJ",
    //         "value": "80788"
    //     },
    //     {
    //         "id": "WV",
    //         "value": "95890"
    //     },
    //     {
    //         "id": "VA",
    //         "value": "83140"
    //     },
    //     {
    //         "id": "NC",
    //         "value": "97344"
    //     },
    //     {
    //         "id": "SC",
    //         "value": "88234"
    //     },
    //     {
    //         "id": "FL",
    //         "value": "88234"
    //     }
    // ]
}



Maps(FusionCharts);
NigeriaMap(FusionCharts);

const chartConfigs = {
    type: 'maps/usa',
    width: 1000,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        countryData
    },
};


class CountryNigeriaMap extends Component {

    state = {

    }

    render(){
        
        return (
            <div>
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default CountryNigeriaMap;
