<template>
    <div>
        <div :id="'chart' + guuid">

        </div>
    </div>
</template>

<script>
import initChart from '@/plugins/chart'
import uuidv4 from 'uuid/v4'
export default {
    data(){
        return {
            guuid:'',
            
        }  
    },
    methods:{
        initChartAction(type="line",dataSet = []){
            this.guuid = uuidv4()
            let domString = `chart${this.guuid}`
            initChart(type,domString,dataSet)
        },
    },
}
</script>

<style>

</style>
