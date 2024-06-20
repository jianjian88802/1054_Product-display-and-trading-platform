const base = {
    get() {
                return {
            url : "http://localhost:8080/qianghuichapin/",
            name: "qianghuichapin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qianghuichapin/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "墙绘产品展示交易平台"
        } 
    }
}
export default base
