$(document).ready(function () {

    // launchPiesAnimation();

   //  $("#skills-button").on("click", launchPiesAnimation );
   
    new Waypoint({
      element: document.getElementById('skillsId'),
      handler: launchPiesAnimation  
    })


    function launchPiesAnimation() {

        $('#demo-pie-1').pieChart({
            barColor: '#18bc9c',
            trackColor: '#99ccff',
            lineCap: 'butt',
            /* lineCap values: round, butt,square */
            lineWidth: 19,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        // Javascript/ ECMA 5
        $('#demo-pie-2').pieChart({
            barColor: '#18bc9c',
            trackColor: '#99ccff',
            lineCap: 'butt',
            lineWidth: 19,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        // PHP 5.7
        $('#demo-pie-3').pieChart({
            barColor: '#18bc9c',
            trackColor: '#99ccff',
            lineCap: 'butt',
            lineWidth: 19,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        // DATABASE - SQL
        $('#demo-pie-4').pieChart({
            barColor: '#18bc9c',
            trackColor: '#99ccff',
            lineCap: 'butt',
            lineWidth: 19,
            /* rotate: 90, */
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

    }

})
