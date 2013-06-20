$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "$$(Northwind_Customers_CustomerID)", key: "ID", dataType: "string", width:"100px" },
                    { headerText: "$$(Northwind_Customers_CompanyName)", key: "CompanyName", dataType: "string", width: "120px" },
                    { headerText: "$$(Northwind_Customers_ContactName)", key: "ContactName", dataType: "string", width: "100px" },
                    { headerText: "$$(Northwind_Customers_ContactTitle)", key: "ContactTitle", dataType: "string", width: "120px" },
                    { headerText: "$$(Northwind_Customers_Address)", key: "Address", dataType: "string", width: "110px" },
                    { headerText: "$$(Northwind_Customers_City)", key: "City", dataType: "string", width: "100px" },
                    { headerText: "$$(Northwind_Customers_Country)", key: "Country", dataType: "string", width: "60px" }
                ],
                autoGenerateColumns: false,                
                dataSource: nwCustomersWithOrders,
                width: "740px",
                height: "100%",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "ID",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "ContactName",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "ContactTitle",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "Address",
                                configuration: {
                                    customPhone: {
                                        template: "${Address}, ${City}, ${Country}"
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "City",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "Country",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            }
                        ],
                        responsiveModes: {
                            customPhone: {
                                minWidth: 0,
                                maxWidth: 500
                            },
                            // alternative mode
                            customAlt: {
                                minWidth: 501,
                                maxWidth: Number.MAX_VALUE
                            }
                        }
                    }
                ]
            });
        });