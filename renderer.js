const robot = require("robotjs");
const schedule = require('node-schedule');
const request = require('request')
const electron = require('electron')
var scaleFactor = electron.screen.getPrimaryDisplay().scaleFactor
switch (process.platform) {
    case 'win32':
        var x1 = 1500*scaleFactor/2
        var y1 = 1052*scaleFactor/2
        var x2 = 1338*scaleFactor/2
        var y2 = 606*scaleFactor/2
        var x3 = 1594*scaleFactor/2
        var y3 = 600*scaleFactor/2
        var x4 = 1348*scaleFactor/2
        var y4 = 812*scaleFactor/2
        var x5 = 1606*scaleFactor/2
        var y5 = 814*scaleFactor/2
        var x6 = 1088*scaleFactor/2
        var y6 = 976*scaleFactor/2
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

// setTimeout(function () {
//     robot.moveMouse(595, 270);
//     robot.mouseClick();  
//     robot.typeStringDelayed('55170561');
//     robot.keyTap('tab');
//     robot.typeStringDelayed('2036');
// }, 2500);


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
});

setInterval(function () {
    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
}, 1000);

