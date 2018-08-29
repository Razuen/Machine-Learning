var fs = require('fs');
fs.readFile('lrdata.txt','utf8',function(err,data){
        var dataset= data.split('\n');
        dataset.splice(2,1);
        var exp = dataset[0].split(',');
        var salary = dataset[1].split(',');
        for(var i=0;i<exp.length;i++)
        {
                exp[i]=parseInt(exp[i]);
                salary[i]=parseInt(salary[i]);
        }
        var Xbar=0,Ybar=0;
        exp.forEach(function(element){
                Xbar+=element;
        });
        Xbar/=exp.length;
        salary.forEach(function(element){
                Ybar+=element;
        });
        Ybar/=salary.length;
        var XminXbar=0,w1=0;
        for(var i=0;i<exp.length;i++)
        {
                exp[i]-=Xbar;
                salary[i]-=Ybar;
                w1+=(exp[i]*salary[i]);
                XminXbar+=exp[i]*exp[i];
        }
        w1/=XminXbar;
        var w0=Ybar-(w1*Xbar);
        console.log('Salary = '+Math.round(w1*10000)/10000+' * experience + '+Math.round(w0*10000)/10000);
});
