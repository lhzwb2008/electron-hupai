// Modules to control application life and create native browser window
const electron = require('electron')
const { app, BrowserWindow, BrowserView } = electron
const path = require('path')
const request = require('request')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let pluginName
let flashVersion
switch (process.platform) {
  case 'win32':
    if(process.arch === 'x64'){
      pluginName = 'flash/PepperFlashPlayer.dll'
    }else{
      pluginName = 'flash/PepperFlashPlayer.dll'
    }
    flashVersion = '32.0.0.171'
    break
  case 'darwin':
    pluginName = 'flash/PepperFlashPlayer.plugin'
    flashVersion = '32.0.0.156'
    break
  case 'linux':
    pluginName = 'flash/libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName))
app.commandLine.appendSwitch('ppapi-flash-version', flashVersion)


function createWindow() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 727,
    x: 0,
    y: 0,
    movable: false,
    resizable: false,
    maximizable: false,
    minimizable: false,
    alwaysOnTop:true,
    fullscreenable: false,
    webPreferences: {
      plugins: true,
      webSecurity: false,
      nodeIntegration: true
    }
  })
  // and load the index.html of the app.
  // console.log(mainWindow.getPosition());
  // and load the index.html of the app.
  mainWindow.setMenu(null)
  mainWindow.loadFile('index.html')

  // let scaleFactor = electron.screen.getPrimaryDisplay().scaleFactor
  // console.log(scaleFactor)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      plugins: true
    }
  })
  mainWindow.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 900, height: 727 })
  // var onlineUrl
  // request.get('http://autohupai.top/hupai-serve/public/index/getUrl', function (error, response, body) {
  //   var bodyobj = JSON.parse(body)
  //   console.log(bodyobj)
  //   onlineUrl = bodyobj.url
  //   console.log(onlineUrl)
  // })
  // request.get("https://paimai.alltobid.com/", { timeout: 500 }, function (error) {
  //   console.log(error);
  //   if (error) {
  //     view.webContents.loadURL('http://test.alltobid.com/moni/gerenlogin.html', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15' })
  //   } else {
      view.webContents.loadURL('https://paimai2.alltobid.com/bid/b901b3c0ba414c3bb7c08761aedbff50/login.htm', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15' })
  //   }
  // })
} 

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.