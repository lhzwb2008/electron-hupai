const robot = require("robotjs");
const schedule = require('node-schedule');  
const request = require('request')  
const electron = require('electron')    
var scaleFactor = electron.screen.getPrimaryDisplay().scaleFactor   
switch (process.platform) { 
    case 'win32':   
        var x1 = 1500 * scaleFactor / 2 
        var y1 = 1052 * scaleFactor / 2 
        var x2 = 1338 * scaleFactor / 2 
        var y2 = 606 * scaleFactor / 2  
        var x3 = 1594 * scaleFactor / 2 
        var y3 = 600 * scaleFactor / 2  
        var x4 = 1348 * scaleFactor / 2 
        var y4 = 812 * scaleFactor / 2  
        var x5 = 1606 * scaleFactor / 2 
        var y5 = 814 * scaleFactor / 2  
        var x6 = 1088 * scaleFactor / 2 
        var y6 = 976 * scaleFactor / 2  
//测试账号输入    
        var x7 = 1106 * scaleFactor/ 2  
        var y7 = 468 * scaleFactor/ 2   
        var x8 = 1140 * scaleFactor/ 2  
        var y8 = 690 * scaleFactor/ 2   
//第一次出价 
        var x10 = 1350 * scaleFactor/ 2 
        var y10 = 608 * scaleFactor/ 2  
        var x11 = 1350 * scaleFactor/ 2 
        var y11 = 734 * scaleFactor/ 2  
        var x12 = 1594 * scaleFactor/ 2 
        var y12 = 726 * scaleFactor/ 2  
        break   
    case 'darwin':  
        var x1 = 772    
        var y1 = 553    
        var x2 = 678    
        var y2 = 324    
        var x3 = 795    
        var y3 = 320    
        var x4 = 795    
        var y4 = 431    
        var x5 = 733    
        var y5 = 428    
        var x6 = 550    
        var y6 = 512    

         var x7 = 595   
        var y7 = 270    
        var x8 = 572    
        var y8 = 369    

         var x10 = 644  
        var y10 = 332   
        var x11 = 644   
        var y11 = 381   
        var x12 = 798   
        var y12 = 389   
        break   
}   


 //弹窗   
setTimeout(function () {    
    robot.moveMouse(x1, y1);    
    robot.mouseClick(); 
}, 2000);   
setTimeout(function () {    
    robot.moveMouse(x1, y1);    
    robot.mouseClick(); 
}, 2100);   




 $(function () {    
    request.get('http://autohupai.top/hupai-serve/public/index/getMessage', function (error, response, body) {  
        var bodyobj = JSON.parse(body)  
        $("#message").html(bodyobj.message);    
    }); 

     if ($("#strategy").val() == 1) {   
        request.get('http://autohupai.top/hupai-serve/public/index/getStrategy', function (error, response, body) { 
            var bodyobj = JSON.parse(body)  
            $("#hour").val(bodyobj.hour)    
            $("#hour").attr("readonly", "readonly") 
            $("#minute").val(bodyobj.minute)    
            $("#minute").attr("readonly", "readonly")   
            $("#fromsecond").val(bodyobj.fromsecond)    
            $("#fromsecond").attr("readonly", "readonly")   
            $("#addmoney").val(bodyobj.addmoney)    
            $("#addmoney").attr("readonly", "readonly") 
            $("#tosecond").val(bodyobj.tosecond)    
            $("#tosecond").attr("readonly", "readonly") 
        }); 
    }   
    setInterval(function () {   
        if ($("#strategy").val() == 1) {    
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy', function (error, response, body) { 
                var bodyobj = JSON.parse(body)  
                $("#hour").val(bodyobj.hour)    
                $("#hour").attr("readonly", "readonly") 
                $("#minute").val(bodyobj.minute)    
                $("#minute").attr("readonly", "readonly")   
                $("#fromsecond").val(bodyobj.fromsecond)    
                $("#fromsecond").attr("readonly", "readonly")   
                $("#addmoney").val(bodyobj.addmoney)    
                $("#addmoney").attr("readonly", "readonly") 
                $("#tosecond").val(bodyobj.tosecond)    
                $("#tosecond").attr("readonly", "readonly") 
            }); 
        }   
    }, 1000);   
    $("#strategy").change(function () { 
        if ($("#strategy").val() == 2) {    
            $("#hour").removeAttr("readonly")   
            $("#minute").removeAttr("readonly") 
            $("#fromsecond").removeAttr("readonly") 
            $("#tosecond").removeAttr("readonly")   
            $("#addmoney").removeAttr("readonly")   
        } else if ($("#strategy").val() == 1) { 
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy', function (error, response, body) { 
                var bodyobj = JSON.parse(body)  
                $("#hour").val(bodyobj.hour)    
                $("#hour").attr("readonly", "readonly") 
                $("#minute").val(bodyobj.minute)    
                $("#minute").attr("readonly", "readonly")   
                $("#fromsecond").val(bodyobj.fromsecond)    
                $("#fromsecond").attr("readonly", "readonly")   
                $("#addmoney").val(bodyobj.addmoney)    
                $("#addmoney").attr("readonly", "readonly") 
                $("#tosecond").val(bodyobj.tosecond)    
                $("#tosecond").attr("readonly", "readonly") 
            }); 
        }   
    })  

     $("#start").click(function () {    
        var rule1 = new schedule.RecurrenceRule();  
        rule1.hour = $("#hour").val();  
        rule1.minute = $("#minute").val();  
        rule1.second = $("#fromsecond").val();  
        schedule.scheduleJob(rule1, () => { 
            robot.moveMouse(x2, y2);    
            robot.mouseClick(); 
            robot.typeString($("#addmoney").val()); 
            robot.moveMouse(x3, y3);    
            robot.mouseClick(); 
            robot.moveMouse(x4, y4);    
            robot.mouseClick(); 
            robot.moveMouse(x5, y5);    
            robot.mouseClick(); 
        }); 
        var rule2 = new schedule.RecurrenceRule();  
        rule2.hour = $("#hour").val();  
        rule2.minute = $("#minute").val();  
        rule2.second = $("#tosecond").val();    
        schedule.scheduleJob(rule2, () => { 
            robot.moveMouse(x6, y6);    
            robot.mouseClick(); 
        }); 

         $("#startmsg").html("于" + new Date().toLocaleTimeString() + "策略设置成功！");    
    }); 

     //测试环境下自动代码    
    request.get('http://autohupai.top/hupai-serve/public/index/getUrl', function (error, response, body) {  
        var bodyobj = JSON.parse(body)  
        onlineUrl = bodyobj.url 
        request.get(onlineUrl, { timeout: 500 }, function (error) { 
            if (error) {    
                $("#strategy").val(2)   
                var time = new Date()   
                $("#hour").val(time.getHours()) 
                $("#minute").val(time.getMinutes()+4)   
                $("#fromsecond").val(48)    
                $("#addmoney").val(600) 
                $("#tosecond").val(58)  
                $("#hour").removeAttr("readonly")   
                $("#minute").removeAttr("readonly") 
                $("#fromsecond").removeAttr("readonly") 
                $("#tosecond").removeAttr("readonly")   
                $("#addmoney").removeAttr("readonly")   
                var rule1 = new schedule.RecurrenceRule();  
                rule1.hour = $("#hour").val();  
                rule1.minute = $("#minute").val();  
                rule1.second = $("#fromsecond").val();  
                schedule.scheduleJob(rule1, () => { 
                    robot.moveMouse(x2, y2);    
                    robot.mouseClick(); 
                    robot.typeString($("#addmoney").val()); 
                    robot.moveMouse(x3, y3);    
                    robot.mouseClick(); 
                    robot.moveMouse(x4, y4);    
                    robot.mouseClick(); 
                    robot.moveMouse(x5, y5);    
                    robot.mouseClick(); 
                }); 
                var rule2 = new schedule.RecurrenceRule();  
                rule2.hour = $("#hour").val();  
                rule2.minute = $("#minute").val();  
                rule2.second = $("#tosecond").val();    
                schedule.scheduleJob(rule2, () => { 
                    robot.moveMouse(x6, y6);    
                    robot.mouseClick(); 
                }); 
                setTimeout(function () {    
                    robot.moveMouse(x7, y7);    
                    robot.mouseClick();     
                    robot.typeStringDelayed('12345678');    
                    robot.keyTap('tab');    
                    robot.typeStringDelayed('1234');    
                    robot.moveMouse(x8, y8);    
                    robot.mouseClick();     
                }, 2500);   

                 setTimeout(function () {   
                    robot.moveMouse(x10, y10);  
                    robot.mouseClick();     
                    robot.typeStringDelayed('87900');   
                    robot.moveMouse(x11, y11);  
                    robot.mouseClick(); 
                    robot.typeStringDelayed('87900');   
                    robot.moveMouse(x12, y12);  
                    robot.mouseClick();     
                }, 60000);  
            }   
        })  
    })  
}); 

 setInterval(function () {  
    var mouse = robot.getMousePos();    
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);  
}, 1000);
