//1. 从多个网页爬取内容，然后进行解析


// import superagent = require('superagent');
import * as superagent from "superagent";

const loadPage = function<T>(url: T) {
    const promise = new Promise<superagent.Response>(function (resolve, reject) {
        superagent.get(url)
            .end(function (err:string, res:string) {
                if (!err) {
                    resolve(res);
                } else {
                    console.log(err);
                    reject(err);
                }
            });
    });
    return promise;
};

let data_count = 0;
async function crawl(){
 for(let num:number=1;num<11;num++){
        const res = await loadPage<string>('http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/'+num+'.txt');
        let text:string=res.text;
        text = text.replace(/\s/g,"");
        const bluefile = text.match(/\d+(\\.\\d+){0}/);
        if(bluefile!=null){
            data_count+=parseInt(bluefile[0]);
        }
    }
    console.log("所有data值的和为"+data_count);
}
crawl();




