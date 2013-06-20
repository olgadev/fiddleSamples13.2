$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='initialFixDirection']").click(function () {
                $("#grid2").igGridColumnFixing("destroy");
                $("#grid2").igGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/
            // Event: columnFixed
            $("#grid2").on("iggridcolumnfixingcolumnfixed", function (evt, ui) {
                var message = "$$(column_fixing_columnFixed_event)" + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });
            // Event: columnUnfixed
            $("#grid2").on("iggridcolumnfixingcolumnunfixed", function (evt, ui) {
                var message = "$$(column_fixing_columnUnfixed_event)" + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });
            // Event: columnFixingRefused
            $("#grid2").on("iggridcolumnfixingcolumnfixingrefused", function (evt, ui) {
                var message = "$$(column_fixing_columnFixingRefused_event)" + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });

        function createGrid() {
            var initialDirection = $('input:radio[name=initialFixDirection]:checked').val();

            $("#grid2").igGrid({
                columns: [
                    { headerText: "$$(Northwind_Customers_CustomerID)", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "$$(Northwind_Customers_CompanyName)", key: "CompanyName", dataType: "string", width: "130px" },
                    { headerText: "$$(Northwind_Customers_ContactName)", key: "ContactName", dataType: "string", width: "100px" },
                    { headerText: "$$(Northwind_Customers_ContactTitle)", key: "ContactTitle", dataType: "string", width: "160px" },
                    { headerText: "$$(Northwind_Customers_Address)", key: "Address", dataType: "string", width: "180px" },
                    { headerText: "$$(Northwind_Customers_City)", key: "City", dataType: "string", width: "110px" },
                    { headerText: "$$(Northwind_Customers_Country)", key: "Country", dataType: "string", width: "100px" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "740px",
                height: "400px",
                features: [
                    {
                        name: "ColumnFixing",
                        fixingDirection: initialDirection,
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true,
                                allowFixing: false
                            },
                            {
                                columnKey: "ContactName",
                                isFixed: true
                            },
                            {
                                columnKey: "ContactTitle",
                                allowFixing: false
                            }
                        ]
                    }
                ]
            });
        }