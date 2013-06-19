$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            var data = [
                    { "columnKey": "CompanyName", "columnHeader": "$$(Northwind_Customers_CompanyName)" },
                    { "columnKey": "ContactName", "columnHeader": "$$(Northwind_Customers_ContactName)" },
                    { "columnKey": "ContactTitle", "columnHeader": "$$(Northwind_Customers_ContactTitle)" },
                    { "columnKey": "Address", "columnHeader": "$$(Northwind_Customers_Address)" },
                    { "columnKey": "City", "columnHeader": "$$(Northwind_Customers_City)" }
            ];

            $("#gridColumns").igCombo({
                dataSource: data, //JSON Array defined above         
                valueKey: "columnKey",
                textKey: "columnHeader",
                width: "300px"
            });

            $("#igButtonSort").igButton({ labelText: $("#igButtonSort").val() });

            $("#igButtonSort").on({
                click: function (e) {
                    var columnKey = $("#gridColumns").igCombo("value");
                    $('#grid7').igGridSorting('sortColumn', columnKey, 'ascending');
                }
            });

            $('#propertiesEditor').igPercentEditor({
                displayFactor: 1,
                minValue: 20,
                maxValue: 80,
                symbol: "%",
                dataMode: 'sbyte',
                button: 'spin',
                width: 220,
                nullText: "propertiesColumnWidth",
                valueChanged: function (evt, ui) {
                    $('#grid7').igGridResponsive('option', 'propertiesColumnWidth', ui.value);
                }
            });

            $("#grid7").igGrid({
                columns: [
                    { headerText: "$$(Northwind_Customers_CustomerID)", key: "ID", dataType: "number", hidden: true },
                    { headerText: "$$(Northwind_Customers_CompanyName)", key: "CompanyName", dataType: "string" },
                    { headerText: "$$(Northwind_Customers_ContactName)", key: "ContactName", dataType: "string" },
                    { headerText: "$$(Northwind_Customers_ContactTitle)", key: "ContactTitle", dataType: "string" },
                    { headerText: "$$(Northwind_Customers_Address)", key: "Address", dataType: "string" },
                    { headerText: "$$(Northwind_Customers_City)", key: "City", dataType: "string" },
                    { headerText: "$$(Northwind_Customers_Country)", key: "Country", dataType: "string", hidden: true }
                ],
                primaryKey: "ID",
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                height: "600px",
                width: "740px",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: true,
                        windowWidthToRenderVertically: null,
                        propertiesColumnWidth: "40%",
                        valuesColumnWidth: "60%",
                        allowedColumnWidthPerType: {
                            string: 120,
                            number: 50,
                            bool: 50,
                            date: 80,
                            object: 150
                        }
                    },
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 5
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Selection"
                    }
                ]
            });
        });