$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/
            
            // process events of buttons

            $("#selectValue").mouseover(function () {
                $("#selectValue").html('');
                var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");
                var options = "<option></option>";
                
                var startValue = minimumValue <= maximumValue ? minimumValue : maximumValue;
                var endValue = minimumValue > maximumValue ? minimumValue : maximumValue;

                for (var i = startValue; i <= endValue; i++)
                    options += "<option>" + i + "</option>";

                if (Math.abs(maximumValue - minimumValue) > 0)
                    $(options).appendTo($("#selectValue"));
            });

            $("#selectValue").change(function (e) {
                $("#needleValue").val($(this).val());
            });

            $("#changeNeedleValue").on({
                click: function (e) {
                    var needleValue = $("#needleValue").val();

                    var minimumValue = $("#radialgauge").igRadialGauge("option", "minimumValue");
                    var maximumValue = $("#radialgauge").igRadialGauge("option", "maximumValue");

                    if((needleValue >= minimumValue && needleValue <= maximumValue)
                        || (needleValue <= minimumValue && needleValue >= maximumValue))
                        $("#radialgauge").igRadialGauge("option", "value", needleValue);
                }
            });
                  
            var prevValue = null;
            $("#getNeedleValue").on({
                click: function (e) {
                    var needleValue = $("#radialgauge").igRadialGauge("option", "value");
                    if (prevValue == null || prevValue != needleValue) {
                        apiViewer.log("$$(RadialGauge_CurrentNeedleValue): " + needleValue);
                        prevValue = needleValue;
                    }
                }
            });
                      
            /*----------------- Instantiation -------------------------*/

            $("#radialgauge").igRadialGauge({
                height: "500px",
                transitionDuration: "1500",
                width: "500px"
            });

            function isAndroid() {
                return navigator.userAgent.match(/Android/i) ? true : false;
            }

            window.onload = function () {
                if (!isAndroid())
                    document.getElementById("selectValue").style.border = "none";
            };
        });