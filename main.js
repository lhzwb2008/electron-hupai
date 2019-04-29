// Modules to control application life and create native browser window
const { app, BrowserWindow, BrowserView } = require('electron')
const path = require('path')
const request = require('request')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let pluginName
switch (process.platform) {
  case 'win32':
    pluginName = 'pepflashplayer.dll'
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName))
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.156')


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
    // alwaysOnTop:true,
    fullscreenable: false,
    webPreferences: {
      plugins: true,
      webSecurity: false
    }
  })
  // and load the index.html of the app.
  // mainWindow.loadURL('http://test.alltobid.com/moni/gerenlogin.html',{userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15'});

  // console.log(mainWindow.getPosition());
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
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
  var onlineUrl
  request.get('http://dagongshuo.xyz/hupai-serve/public/index/getUrl', function (error, response, body) {
    var bodyobj = JSON.parse(body)
    onlineUrl = bodyobj.url
  })
  request.get(onlineUrl, { timeout: 500 }, function (error) {
    if (error) {
      view.webContents.loadURL('http://test.alltobid.com/moni/gerenlogin.html', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15' })

    } else {
      view.webContents.loadURL(onlineUrl, { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15' })
    }
  })




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