import { ipcRenderer } from 'electron'

export const checkAppInstall = (appName: string) => {
  ipcRenderer.send('check-app-exist', appName)
}

export const startApp = (appInfo) => {
  console.log('---startApp appName: ',appInfo)
  ipcRenderer.send('start-app', appInfo)
}

export const checkAppInfoEvent = (cb: (data: any) => void) => {
  ipcRenderer.on('check-app-exist-result', (e, data) => {
    cb && cb(data)
  })
}

export const startAppInfoEvent = (cb: (data: any) => void) => {
  ipcRenderer.on('start-app-result', (e, data) => {
    cb && cb(data)
  })
}

