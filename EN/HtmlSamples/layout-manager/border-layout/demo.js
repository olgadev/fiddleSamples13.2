$(function () {
$(document).ready(function () {
            // attach to events so that we can add the items content
            $('#layout').on("iglayoutmanageritemrendered", function (event, args) {
                if (args.region === "left") {
                    args.element.text("$$(left_area)");
                    args.element.css("background-color", "#FFA72D");
                    args.element.css("color", "#FFF");
                } else if (args.region === "right") {
                    args.element.text("$$(right_area)");
                    args.element.css("background-color", "#555");
                    args.element.css("color", "#EEE");
                } else if (args.region === "center") {
                    args.element.text("$$(center_area)");
                    args.element.css("background-color", "#EEE");
                    args.element.css("color", "#555");
                } else if (args.region === "header") {
                    args.element.text("$$(header_area)");
                    args.element.css("background-color", "#2CBDF9");
                    args.element.css("color", "#FFF");
                } else if (args.region === "footer") {
                    args.element.text("$$(footer_area)");
                    args.element.css("background-color", "#2CBDF9");
                    args.element.css("color", "#FFF");
                }
            });
            $('#layout').igLayoutManager({
                layoutMode: "border",
                borderLayout: {
                    leftWidth: "10%",
                    rightWidth: "20%"
                }
            });
        });
});