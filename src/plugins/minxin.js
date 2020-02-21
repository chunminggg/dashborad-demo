
import moment from 'moment'
export const globalMixin = {
  methods: {
    // 处理字符串长度
    mixConfigStringLength(val='',valLength=10){
      if(val.length > valLength){
        return val.slice(0,valLength)+'...'
      }
      else{
        return val
      }
      
    },
    // 获取当前时间
    mixGetCurrentTime(format = 'YYYY/MM/DD HH:mm:ss') {
      return moment().format(format)
    },
    // 正常判断文件大小
    mixCommonFileSize(file, fileSizeLimit = 25) {
        let fileSize = file.size / 1024 / 1024
        if (fileSize > fileSizeLimit) {
          this.$Message.warning(this.$t('m.SpredsheetFileSizeTip'))
          return false
        }
        else {
          return true
        }
    },
    // 判断文件大小
    mixFileSize(file) {
        let fileSize = file.size / 1024 / 1024
        // let fileSize = file.size / 1024 
        if (fileSize > 25) {
          this.$Message.warning(this.$t('m.FileLimitSizeTip'))
          return false
        }
        else {
          return true
        }
    },
    // 大小值判断
    mixCheckMaxMinValue(minValue = 0, maxValue = 0) {
      let isCorrect = true
      minValue = parseFloat(minValue)
      maxValue = parseFloat(maxValue)
      let value = maxValue - minValue
      if (value < 0) {
        isCorrect = false
        this.$Message.warning(this.$t('m.MaxBiggerMinTip'))
      }
      else {
        isCorrect = true
      }
      return isCorrect
    },
    mixCheckNumberFormat(value) {
      if (value == null) {
        return value
      }
      else if (typeof value == 'string' && !value.length) {
        return null
      }
      else {
        return parseFloat(value)
      }
    },
    // 接口回调判断
    mixJudageNetwork(response, isShowTip = true, code = config.CODE) {
      if (response.code == code) {
        if (isShowTip) {
          this.$Message.success(response.message)

        }
        return true
      }
      else {
        if (isShowTip) {
          this.$Message.warning(response.message)
        }

        return false
      }
    },
    mixCheckFull() {
      // var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
      let isFull = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      //to fix : false || undefined == undefined
      if (isFull === undefined) { isFull = false; }
      return isFull;
    },
    mixDateRangeOperation(dateRangeArray) {
      return `${moment(dateRangeArray[0]).format(
        "YYYY-MM-DD"
      )}&${moment(dateRangeArray[1]).format(
        "YYYY-MM-DD"
      )}`;
    },
    // 全屏
    mixFullScreen() {
      let isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      let el = document.body
      if (!isFullscreen) {
        (el.requestFullscreen && el.requestFullscreen()) ||
          (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
          (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) || (el.msRequestFullscreen && el.msRequestFullscreen());
      }
      else {
        document.exitFullscreen ? document.exitFullscreen() :
          document.mozCancelFullScreen ? document.mozCancelFullScreen() :
            document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
      }
    },
  }
}