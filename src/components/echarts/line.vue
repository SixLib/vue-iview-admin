<template>
    <div id="echart-line" style="height:400px;"></div>
</template>
<script>
import Echarts from "echarts";
export default {
  mounted() {
    var lineChart = Echarts.init(document.getElementById("echart-line"));
    window.onresize = lineChart.resize;
    this.$store.dispatch("getEchartsData", "line", "line").then(() => {
      // 绘制图表
      lineChart.setOption({
        legend: {
          data: this.$store.getters.echartsLineData.legend.data
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
          data: this.$store.getters.echartsLineData.xAxis.data
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: [
          {
            type: "value"
          }
        ],
        series: this.$store.getters.echartsLineData.series.map(function(s) {
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

