$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            var rowTmpl = "";
            var columnObj = [
                { headerText: "$$(Northwind_Employees_EmployeeID)", key: "ID", dataType: "number", width: "90px" },
                { headerText: "$$(Northwind_Employees_Name)", key: "Name", dataType: "string", width: "100px" },
                { headerText: "$$(Northwind_Employees_Image)", key: "ImageUrl", dataType: "object", width: "110px" },
                { headerText: "$$(Northwind_Employees_Title)", key: "Title", dataType: "string", width: "130px" },
                { headerText: "$$(Northwind_Employees_Phone)", key: "Phone", dataType: "string", width: "110px" },
                { headerText: "$$(Northwind_Employees_Country)", key: "Country", dataType: "string", width: "80px" },
                { headerText: "$$(table_lbl_birthDate)", key: "BirthDate", dataType: "date", width: "100px" }
            ];

            rowTmpl = getRowTmpl(columnObj);
            var tmpl = rowTmpl.split(/(<tr>|<\/td>)/);

            $.each(tmpl, function () {
                $("#tmpl").append($("<div></div>").text(this));
            });

            $.views.helpers(
            {
                toDate: function (val) {
                    return new Date(val);
                }
            });

            $.views.helpers(
            {
                toFullName: function (val) {
                    var name = val.split(',').reverse().join(" ");
                    return name;
                }
            });

            function getRowTmpl(cols) {
                var tmpl = "<tr>";
                var imagesroot = "http://igniteuisamples.dev.infragistics.local/13-2/images/samples/nw/countries/";

                $.each(cols, function () {
                    switch (this.key) {
                        case 'BirthDate':
                            tmpl += "<td><span style='color:{{if #view.hlp('toDate')(BirthDate) > #view.hlp('toDate')('1950-01-01T00:00:00.000')}}blue{{else}}red{{/if}};'>" +
                            "{{>" + this.key + "}}" + "</span></td>";
                            break;
                        case 'ImageUrl':
                            tmpl += "<td><img width='100' height='90' src=" +
                             "{{>" + this.key + "}}" + "></img></td>";
                            break;
                        case 'Country':
                            tmpl += "<td><img  width='20' height='15' src='" +
                             imagesroot + "{{>" + this.key + "}}" + ".gif'" +
                             "></img>" + "{{>" + this.key + "}}" + "</td>";
                            break;
                        case 'Name':
                            tmpl += "<td>" +
                              "{{> #view.hlp('toFullName')(" + this.key + ")}}" +
                              "</td>";
                            break;
                        default:
                            tmpl += "<td>{{>" + this.key + "}}</td>";
                            break;
                    }
                });

                tmpl += "</tr>";
                return tmpl;
            }

            $("#grid12").igGrid({
                width: "740px",
                height: "600px",
                rowTemplate: rowTmpl,
                autoGenerateColumns: false,
                columns: columnObj,
                dataSource: northwindEmployees,
                dataSourceType: 'json',
                primaryKey: "ID",
                templatingEngine: "jsrender",
                features: [
                    {
                        name: "Selection"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        mode: "advanced",
                        filterDropDownItemIcons: false,
                        filterDropDownWidth: 200
                    },
                    {
                        name: "Updating",
                        enableAddRow: false,
                        editMode: "rowedittemplate",
                        rowEditDialogWidth: 350,
                        rowEditDialogHeight: '430',
                        rowEditDialogContentHeight: 300,
                        rowEditDialogFieldWidth: 150,
                        rowEditDialogOkCancelButtonWidth: 110,
                        rowEditDialogContainment: "owner",
                        showReadonlyEditors: false,
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                readOnly: true
                            },
                            {
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "Title",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: titles,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            },
                            {
                                columnKey: "Country",
                                editorType: "text",
                                editorOptions: {
                                    button: "dropdown",
                                    listItems: countries,
                                    readOnly: true,
                                    dropDownOnReadOnly: true
                                }
                            },
                            {
                                columnKey: "BirthDate",
                                editorType: "datepicker",
                                validation: true,
                                editorOptions: { minValue: new Date(1955, 1, 19), maxValue: new Date(), required: true },
                                validatorOptions: { bodyAsParent: false }
                            }
                        ]
                    }
                ]
            });
        });