$(function () {
            var dynamicModel,
                overallProfit = 0,
                MTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                MONTHS = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
                
            // KO related functionallity starts here
            function generateData() {
                var num = 12, data = [], curr = 10, rand1, rand2, rand3;
                overallProfit = 0;
                for (var i = 0; i < num; i++) {
                    if (Math.random() > .5) {
                        curr += Math.random() * 2.0;
                    } else {
                        curr -= Math.random() * 2.0;
                    }
                    rand1 = Math.random() * 50.0;
                    rand2 = Math.random() * 40.0;
                    rand3 = rand1 - rand2;
                    overallProfit += rand3;
                    data[i] = {
                        index: ko.observable(i),
                        month: ko.observable(MTHS[i]),
                        revenue: ko.observable(rand1),
                        expenses: ko.observable(rand2),
                        profit: ko.observable(rand3)
                    };
                }
                return data;
            }

            function ViewModel(data) {
                self = this;
                this.data = data;
                this.minChartValue = -50;
                this.maxChartValue = 50;
                this.chartWidth = 700;
                this.chartHeight = 220;
                this.chartThickness = 2;
                this.chartIntervalX = 1;
                this.chartIntervalY = 10;
                this.transitionDuration = 1000;
                this.revenueColor = "#a4ba29";
                this.expensesColor = "#d3404b";
                this.profitColor = "#216EDD";
                this.currentIndex = ko.observable(3);
                this.yearProfit = ko.observable(overallProfit);
                this.formatMonth = function (value) {
                    return MTHS[value];
                }
                this.currentMonth = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].month();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].month(value);
                    },
                    owner: this
                });
                this.currentRevenue = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].revenue();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].revenue(value);
                    },
                    owner: this
                });
                this.currentExpenses = ko.computed({
                    read: function () {
                        return this.data[this.currentIndex()].expenses();
                    },
                    write: function (value) {
                        this.data[this.currentIndex()].expenses(value);
                    },
                    owner: this
                });
                this.currentProfit = ko.computed({
                    read: function () {
                        var currentItem = this.data[this.currentIndex()],
                            newProfit = currentItem.revenue() - currentItem.expenses();
                        this.yearProfit(this.yearProfit() - currentItem.profit() + newProfit);
                        this.data[this.currentIndex()].profit(newProfit);
                        return newProfit;
                    },
                    write: function (value) {
                        var currentItem = this.data[this.currentIndex()];
                        this.yearProfit(this.yearProfit() - currentItem.profit() + value);
                        currentItem.profit(value);
                        if (currentItem.revenue() + value <= 50) {
                            currentItem.revenue(currentItem.expenses() + value);
                        } else {
                            currentItem.revenue(50);
                            currentItem.expenses(50 - value);
                        }
                        
                        
                    },
                    owner: this
                });
            }
            dynamicModel = new ViewModel(generateData());
            ko.applyBindings(dynamicModel);
            // KO related functionallity ends here

            $(".number-container").html(MONTHS[dynamicModel.currentIndex()]);
            $("#slider1").slider({
                range: "max", min: 0, max: 11, value: dynamicModel.currentIndex(), slide: slideHandler
            });
            $("#slider2").slider({
                range: "max", min: 0, max: 11, value: dynamicModel.currentIndex(), slide: slideHandler
            });
            function slideHandler(event, ui) {
                $("#slider1").slider("value", ui.value);
                $("#slider2").slider("value", ui.value);
                $(".number-container").fadeOut(200, function () {
                    $(".number-container").html(MONTHS[ui.value]).fadeIn(200);
                });
                dynamicModel.currentIndex(ui.value);
            }
            $(".btn-refresh").click(function (e) {
                dynamicModel = new ViewModel(generateData());
                ko.applyBindings(dynamicModel);
            });
            $(".windows-button").click(function (e) {
                wind1 = $(".window-container-1");
                wind2 = $(".window-container-2");
                if (wind1.css("display") === "none") {
                    wind2.fadeOut(1000);
                    wind1.fadeIn(1000);
                } else {
                    wind1.fadeOut(1000);
                    wind2.fadeIn(1000);
                }
            });
            $(".main-container").on("igtexteditortextchanged", "#ed-month", animateMonth);
            $(".main-container").on("ignumericeditortextchanged", "#ed-revenue", animateRevenue);
            $(".main-container").on("ignumericeditortextchanged", "#ed-expenses", animateExpenses);
            $(".main-container").on("ignumericeditortextchanged", "#ed-profit", animateProfit);
            function animateMonth() {
                animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
                animateChartBorder("rangeChart"); animateChartBorder("waterfallChart");
            }
            function animateRevenue() {
                animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
                animateChartBorder("rangeChart"); animateChartBorder("waterfallChart");
                animateChartBorder("bubbleChart"); animateChartBorder("polarSplineChart");
            }
            function animateExpenses() {
                animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
                animateChartBorder("rangeChart");
                animateChartBorder("waterfallChart"); animateChartBorder("bubbleChart");
            }
            function animateProfit() {
                animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
                animateChartBorder("rangeChart");
                animateChartBorder("bubbleChart"); animateChartBorder("waterfallChart");
            }
            function animateChartBorder(id) {
                id = "#" + id + "_chart_container";
                $(id).stop().animate({ borderColor: '#FA0000' }, 1000, function () {
                    $(id).stop().animate({ borderColor: '#B1B1B1' }, 1000);
                });
            }
        });