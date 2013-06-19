$(function () {
            /*----------------- Instantiation -------------------------*/
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "600px",
                width: "150px",
                orientation: "vertical",
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                targetValue: 90,
                interval: 10,
                title: "title",
                subtitle: "subtitle"
            });


            // Label Extent
            $("#orientationButton").click(function () {
                var value = $bulletGraph.igBulletGraph("option", "orientation") == "vertical" ? "horizontal" : "vertical",
                    displayValue = value == "horizontal" ? "$$(Vertical)" : "$$(Horizontal)",
                    width = $bulletGraph.igBulletGraph("option", "height"),
                    height = $bulletGraph.igBulletGraph("option", "width");
                $bulletGraph.igBulletGraph("option", "orientation", value);
                $bulletGraph.igBulletGraph("option", "width", width);
                $bulletGraph.igBulletGraph("option", "height", height);

                $("#orientationButton").text(displayValue);
            });

            // Label Interval
            $("#isScaleInvertedCheckBox").click(function () {
                $bulletGraph.igBulletGraph("option", "isScaleInverted", $(this).is(":checked"));
            });
        });