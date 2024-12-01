import moment from "moment"
moment.locale('zh-cn') // 使用中文
const formatTime = {
    getTime:(date)=>{
        return moment(date).format('YYYY/MM/DD');

    }
}

export default formatTime