var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'HupaiHelper-win32-x64',
    outputDirectory: 'HupaiHelper-installer-win32-x64',
    authors: 'zark',
    exe: 'HupaiHelper.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));