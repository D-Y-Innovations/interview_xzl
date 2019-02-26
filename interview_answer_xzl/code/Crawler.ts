//1. 从多个网页爬取内容，然后进行解析

function loadPage(url) {
    var http = require('http');
    var pm = new Promise(function (resolve, reject) {
        http.get(url, function (res) {
            var html = '';
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

var data_count = 0;
async function crawl(){
        for (var i=1;i<11;i++) {
            await loadPage('http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/'+i+'.txt').then(function (d) {
            var str = d;
            reg = /data : ([\s\S]+); /gi;
            var result;
            if ((result = reg.exec(str)) != null) {
                data_num = parseInt(result[1]);
                data_count = data_count+data_num;
                console.log(i+".txt的data值为"+data_num);
                }
            });
        }
        console.log("所有data值的和为"+data_count);
}
crawl();




