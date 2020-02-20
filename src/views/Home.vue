<template>
  <div class="home">
    <img src="@/assets/starBackground.jpg" alt="" class="background">
    <div class="flex-parent">
      <div class="flex-left">
        <left-chart></left-chart>
      </div>
      <div class="flex-right">

      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import leftChart from '@/components/home/left-chart'
export default {
  name: "Home",
  components: {
    leftChart,
  },
  data() {
    return {};
  },
  mounted() {
    this.configData();
  },
  methods: {
    configData() {
    }
  }
};
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
  .background{
    width: 100%;
    height:100%;
  }
  .title{
    text-align: center;
    color: white;
  }
  .flex-parent{
  display: flex;
  .flex-left{
    flex:1;
  }
  .flex-right{
    flex:3;
  }
}
}
</style>

