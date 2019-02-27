//1. 从多个网页爬取内容，然后进行解析

function loadPage(url) {
    const  http = require('http');
    const  pm = new Promise(function (resolve, reject) {
        http.get(url, function (res) {
            let html = '';
            res.on('data', function (d) {
                html += d.toString()
            });
            res.on('end', function () {
                resolve(html);
            });
        }).on('error', function (e) {
             reject(e)
        });
    });
    return pm;
}

let data_count = 0;
async function crawl(){
        for (let i=1;i<11;i++) {
            await loadPage('http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/'+i+'.txt').then(function (d) {
            let str = d;
            let reg = /data : ([\s\S]+); /gi;
            let result ;
            if ((result = reg.exec(str)) != null) {
                let data_num:number = parseInt(result[1]);
                data_count = data_count+data_num;
                console.log(i+".txt的data值为"+data_num);
                }
            });
        }
        console.log("所有data值的和为"+data_count);
}
crawl();




