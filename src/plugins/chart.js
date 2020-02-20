import echarts from 'echarts'
export const initChart = (type,domString,options) => {
    let chart = echarts.init(domString)
    chart.setOptions(options)
}