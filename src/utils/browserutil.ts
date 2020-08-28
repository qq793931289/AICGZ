export enum BrowserTypes {
  Chrome = 'Chrome',
  IE = 'IE',
  Firefox = 'Firefox',
  Safari = 'Safari',
  Trident = 'Trident',
  Opera = 'Opera',
}

export enum PlatformTypes {
  IOS = 'ios',
  Android = 'android',
  Windows = 'windows',
  Mac = 'mac',
  Linux = 'linux',
  Unix = 'unix',
  Other = 'other',
}

export class BrowserUtil {

  public browser: BrowserTypes | undefined;
  public platform = PlatformTypes.Windows;

  constructor() {
    this._updateBrowser();
    this._updatePlatform();
    console.log('browser:' + this.browser);
    console.log('platform:' + this.platform);
    if (this.browser === BrowserTypes.IE) {
      window.location.href = 'http://www.aicgz.com/home2015';
    }
  }

  private _updateBrowser() {
    const userAgent = navigator.userAgent;
    const isOpera = userAgent.indexOf('Opera') > -1;
    if (isOpera) {
      this.browser = BrowserTypes.Opera;
    }
    if (userAgent.indexOf('Firefox') > -1) {
      this.browser = BrowserTypes.Firefox;
    }
    if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1) {
      this.browser = BrowserTypes.Chrome;
    }
    if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
      this.browser = BrowserTypes.IE;
    }
    if (userAgent.indexOf('Trident') > -1) {
      this.browser = BrowserTypes.Trident;
    }
    if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
      this.browser = BrowserTypes.Trident;
    }
  }

  private _updatePlatform() {
    const isWin = (window.navigator.platform === 'Win32') || (window.navigator.platform === 'Windows');
    if (isWin) {
      this.platform = PlatformTypes.Windows;
      return;
    }
    const isMac = (window.navigator.platform === 'Mac68K') || (window.navigator.platform === 'MacPPC') ||
      (window.navigator.platform === 'Macintosh') || (window.navigator.platform === 'MacIntel');
    if (isMac) {
      this.platform = PlatformTypes.Mac;
      return;
    }
    const isUnix = (window.navigator.platform === 'X11') && !isWin && !isMac;
    if (isUnix) {
      this.platform = PlatformTypes.Unix;
      return;
    }
    const isLinux = (String(window.navigator.platform).indexOf('Linux') > -1);
    if (isLinux) {
      this.platform = PlatformTypes.Linux;
      return;
    }
    const isIos = /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent);
    if (isIos) {
      this.platform = PlatformTypes.IOS;
      return;
    }
    const isAndroid = /(Android)/i.test(window.navigator.userAgent);
    if (isAndroid) {
      this.platform = PlatformTypes.Android;
      return;
    }
    this.platform = PlatformTypes.Other;
  }
}