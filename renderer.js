const robot = require("robotjs");
const schedule = require('node-schedule');

//弹窗
setTimeout(function () {
    robot.moveMouse(772, 553);
    robot.mouseClick();
}, 2000);
setTimeout(function () {
    robot.moveMouse(772, 555);
    robot.mouseClick();
}, 2100);

//输入账号
setTimeout(function () {
    robot.moveMouse(595, 270);
    robot.mouseClick();
    robot.typeStringDelayed('55170561');
    robot.keyTap('tab');
    robot.typeStringDelayed('2036');
}, 2500);

$(function () {
    $("#start").click(function () {
        var rule1 = new schedule.RecurrenceRule();
        rule1.hour = $("#hour").val();
        rule1.minute = $("#minute").val();
        rule1.second = $("#fromsecond").val();
        schedule.scheduleJob(rule1, () => {
            robot.moveMouse(670, 327);
            robot.mouseClick();
            robot.typeString($("#addmoney").val());
            robot.moveMouse(794, 323);
            robot.mouseClick();
            robot.moveMouse(785, 433);
            robot.mouseClick();
            robot.moveMouseSmooth(718, 435);
            robot.mouseClick();
        });
        var rule2 = new schedule.RecurrenceRule();
        rule2.hour = $("#hour").val();
        rule2.minute = $("#minute").val();
        rule2.second = $("#tosecond").val();
        schedule.scheduleJob(rule2, () => {
            robot.moveMouse(540, 510);
            robot.mouseClick();
        });
        alert('策略设置成功！请准备输入验证码，输入后无需点击确认！');
    });
});

// setInterval(function () {
//     var mouse = robot.getMousePos();
//     console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
// }, 1000);

