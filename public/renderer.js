const robot = require("robotjs");
const schedule = require('node-schedule');
const request = require('request')
const electron = require('electron')
var scaleFactor = electron.screen.getPrimaryDisplay().scaleFactor
var x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6

function getXY() {
    console.log('run getXY...');
    switch (process.platform) {
        case 'win32':
            var result;
            request.get('http://autohupai.top/hupai-serve/public/index/getXY?isWin=1', function (error, response, body) {
                result = JSON.parse(body)
                x1 = result.x1 * scaleFactor / 2
                y1 = result.y1 * scaleFactor / 2
                x2 = result.x2 * scaleFactor / 2
                y2 = result.y2 * scaleFactor / 2
                x3 = result.x3 * scaleFactor / 2
                y3 = result.y3 * scaleFactor / 2
                x4 = result.x4 * scaleFactor / 2
                y4 = result.y4 * scaleFactor / 2
                x5 = result.x5 * scaleFactor / 2
                y5 = result.y5 * scaleFactor / 2
                x6 = result.x6 * scaleFactor / 2
                y6 = result.y6 * scaleFactor / 2
            });
            break
        case 'darwin':
            var result;
            request.get('http://autohupai.top/hupai-serve/public/index/getXY?isWin=0', function (error, response, body) {
                result = JSON.parse(body)
                x1 = result.x1
                y1 = result.y1
                x2 = result.x2
                y2 = result.y2
                x3 = result.x3
                y3 = result.y3
                x4 = result.x4
                y4 = result.y4
                x5 = result.x5
                y5 = result.y5
                x6 = result.x6
                y6 = result.y6
            });
            break
    }
}

function setClick() {
    getXY();
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
         setTimeout(function () {
            robot.moveMouse(x6, y6);
            robot.mouseClick();;
        }, $("#ms").val());
    });
    $("#startmsg").html("于" + new Date().toLocaleTimeString() + "策略设置成功！");
}


getXY();


//弹窗   
setTimeout(function () {
    robot.moveMouse(x1, y1);
    robot.mouseClick();
}, 3000);
setTimeout(function () {
    robot.moveMouse(x1, y1);
    robot.mouseClick();
}, 3100);



$(function () {
    request.get('http://autohupai.top/hupai-serve/public/index/getMessage', function (error, response, body) {
        var bodyobj = JSON.parse(body)
        $("#message").html(bodyobj.message);
    });

    $("#strategy").change(function () {
        if ($("#strategy").val() == 0) {
            $("#hour").removeAttr("readonly")
            $("#minute").removeAttr("readonly")
            $("#fromsecond").removeAttr("readonly")
            $("#tosecond").removeAttr("readonly")
            $("#addmoney").removeAttr("readonly")
            $("#ms").removeAttr("readonly")
        } else if ($("#strategy").val() == 1) {
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy?id=1', function (error, response, body) {
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
                $("#ms").val(bodyobj.ms)
                $("#ms").attr("readonly", "readonly")
            });
        } else if ($("#strategy").val() == 2) {
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy?id=2', function (error, response, body) {
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
                $("#ms").val(bodyobj.ms)
                $("#ms").attr("readonly", "readonly")
            });
        } else if ($("#strategy").val() == 3) {
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy?id=3', function (error, response, body) {
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
                $("#ms").val(bodyobj.ms)
                $("#ms").attr("readonly", "readonly")
            });
        }
    })

    //测试环境下自动代码    
    request.get('http://autohupai.top/hupai-serve/public/index/isOnline', function (error, response, body) {
        var bodyobj = JSON.parse(body)
        isOnline = bodyobj.isOnline;
        if (!isOnline) {
            $("#strategy").val(0)
            var time = new Date()
            $("#hour").val(time.getHours())
            $("#minute").val(time.getMinutes() + 4)
            $("#fromsecond").val(48)
            $("#addmoney").val(600)
            $("#tosecond").val(58)
            $("#hour").removeAttr("readonly")
            $("#minute").removeAttr("readonly")
            $("#fromsecond").removeAttr("readonly")
            $("#tosecond").removeAttr("readonly")
            $("#addmoney").removeAttr("readonly")
            $("#ms").removeAttr("readonly")
            getXY();
            setClick();
        } else {
            $("#strategy").val(1)
            request.get('http://autohupai.top/hupai-serve/public/index/getStrategy?id=1', function (error, response, body) {
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
                $("#ms").val(bodyobj.ms)
                $("#ms").attr("readonly", "readonly")
            });
            getXY();
            setClick();
        }
    })

    $("#start").click(function () {
        getXY();
        setClick();
    });
});

// setInterval(function () {
//     var mouse = robot.getMousePos();
//     console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
// }, 1000);


