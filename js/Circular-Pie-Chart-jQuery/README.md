# pie-chart
An easy jQuery plugin pie chart using html5 canvas

1: Default options

      barColor: the main chart bar color which show the actual percent digital
      trackColor: background color which show the remainder percent digital
      lineCap: 'round',
      lineWidth: 3,
      size: 110, // the chart size, default is px
      rotate: 0, // the origin of coordinates is at the top, if your rotate to 90 degree, it will be at the right direction
      animate: { // if enable the animation, if not set to false
        duration: 1000,
        enabled: true
      }
      onStep: function (from, to, currentValue) { // the function to show the percent digital animate, you can refer to the demo for more details
        return;
      }
    
![Pie-Chart](https://github.com/chenruchang/pie-chart/blob/master/image/demo.png)