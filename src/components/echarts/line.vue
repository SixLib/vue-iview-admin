<template>
    <div id="echart-line" style="float:left;height:400px;white-space:nowrap"></div>
</template>
<script>
import Echarts from "echarts";
export default {
  mounted() {
    var lineChart = Echarts.init(document.getElementById("echart-line"));
    window.onresize = lineChart.resize;
    this.$store.dispatch("getEchartsData", "line", "line").then(data => {
      // 绘制图表
      lineChart.setOption({
        legend: {
          data: data.legend.data
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.xAxis.data
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: [
          {
            type: "value"
          }
        ],
        series: data.series.map(function(s) {
          s.type = "line";
          s.areaStyle = { normal: {} };
          s.label = {
            normal: {
              show: true,
              position: "top"
            }
          };
          return s;
        })
      });
    });
  }
};
</script>

