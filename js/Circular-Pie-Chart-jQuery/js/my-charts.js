$(document).ready(function () {

    
        $("#skillsId").on("click", function() {

            console.log("pies clicked!")

            $('#demo-pie-1').pieChart({
                barColor: '#ff6600',
                trackColor: '#99ccff',
                lineCap: 'butt',
                /* lineCap values: round, butt,square */
                lineWidth: 17,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            // Javascript/ ECMA 5
            $('#demo-pie-2').pieChart({
                barColor: '#ffff00',
                trackColor: '#99ccff',
                lineCap: 'butt',
                lineWidth: 17,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            // PHP 5.7
            $('#demo-pie-3').pieChart({
                barColor: '#9933ff',
                trackColor: '#99ccff',
                lineCap: 'butt',
                lineWidth: 17,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            // DATABASE - SQL
            $('#demo-pie-4').pieChart({
                barColor: '#3333ff',
                trackColor: '#99ccff',
                lineCap: 'butt',
                lineWidth: 17,
                /* rotate: 90, */
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

        })
})
