$(function () {
var energyData = [
            {"Region" : "America", "Country" : "Canada", "Coal" : 400, "Oil" : 100, "Gas" : 175, "Nuclear" : 225, "Hydro" : 350 },
            {"Region" : "Asia", "Country" : "China", "Coal" : 925, "Oil" : 200, "Gas" : 350, "Nuclear" : 400, "Hydro" : 625 },
            {"Region" : "Europe", "Country" : "Russia", "Coal" : 550, "Oil" : 200, "Gas" : 250, "Nuclear" : 475, "Hydro" : 425 },
            {"Region" : "Asia", "Country" : "Australia", "Coal" : 450, "Oil" : 100, "Gas" : 150, "Nuclear" : 175, "Hydro" : 350 },
            {"Region" : "America", "Country" : "United States", "Coal" : 800, "Oil" : 250, "Gas" : 475, "Nuclear" : 575, "Hydro" : 750 },
            {"Region" : "Europe", "Country" : "France", "Coal" : 375, "Oil" : 150, "Gas" : 350, "Nuclear" : 275, "Hydro" : 325 }
        ];

        $("#chart").igDataChart({
                dataSource: energyData,
                title: "$$(Chart_Title)",
                subTitle: "$$(Chart_Subtitle)",
                axes: [{
                    type: "categoryX",
                    name: "xAxis",
                    label: "Country",
                    strokeThickness: 5
                }, {
                    type: "numericY",
                    name: "yAxis",
                    minimumValue: 0,
                    maximumValue: 800,
                    strokeThickness: 5
                }],
                series: [{
                    type: "column",
                    name: "Coal",
                    title: "$$(Chart_Composite_Coal_DS)",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Coal",
                    showTooltip: true,
                    tooltipTemplate: "tooltipCoal",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Hydro",
                    title: "$$(Chart_Composite_Hydro_DS)",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Hydro",
                    showTooltip: true,
                    tooltipTemplate: "tooltipHydro",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Nuclear",
                    title: "$$(Chart_Composite_Nuclear_DS)",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Nuclear",
                    showTooltip: true,
                    tooltipTemplate: "tooltipNuclear",
                    legend: { element: "legend" }
                },{
                    type: "column",
                    name: "Gas",
                    title: "$$(Chart_Composite_Gas_DS)",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Gas",
                    showTooltip: true,
                    tooltipTemplate: "tooltipGas",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Oil",
                    title: "$$(Chart_Composite_Oil_DS)",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Oil",
                    showTooltip: true,
                    tooltipTemplate: "tooltipOil",
                    legend: { element: "legend" }
                }],
            });
        //});});