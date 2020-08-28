

export class WEBGLUtil {

  constructor() {

    const LogStyle: string[] = ['%c%s', 'color: yellow; background: green; font-size: 16px;'];

    if (this.isWebGLAvailable()) {
      // Initiate function or other initializations here
      console.log(...LogStyle, ' 支持 WebGL 1.0 ');
    } else {
      // const warning = this.getWebGLErrorMessage();
      // document.getElementById('root').appendChild(warning);
      // document.body.appendChild(warning);
      console.log(...LogStyle, ' 不支持 WebGL 1.0 ');

    }

    if (this.isWebGL2Available()) {
      // document.body.appendChild(this.getWebGL2ErrorMessage());
      console.log(...LogStyle, ' 支持 WebGL 2.0 ');
    } else {
      console.log(...LogStyle, ' 不支持 WebGL 2.0 ');
    }

  }

  public isWebGLAvailable(): boolean {

    try {

      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));

    } catch (e) {

      return false;

    }

  }

  public isWebGL2Available(): boolean {

    try {

      const canvas = document.createElement('canvas');
      return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));

    } catch (e) {

      return false;

    }

  }

  public getWebGLErrorMessage(): HTMLElement {

    return this.getErrorMessage(1);

  }

  public getWebGL2ErrorMessage(): HTMLElement {

    return this.getErrorMessage(2);

  }

  public getErrorMessage(version: number): HTMLElement {

    const names: any = {
      1: 'WebGL',
      2: 'WebGL 2',
    };

    const contexts: any = {
      1: window.WebGLRenderingContext,
      2: window.WebGL2RenderingContext,
    };

    let message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

    const element = document.createElement('div');
    element.id = 'webglmessage';
    element.style.fontFamily = 'monospace';
    element.style.fontSize = '13px';
    element.style.fontWeight = 'normal';
    element.style.textAlign = 'center';
    element.style.background = '#fff';
    element.style.color = '#000';
    element.style.padding = '1.5em';
    element.style.width = '400px';
    element.style.margin = '5em auto 0';

    if (contexts[version]) {

      message = message.replace('$0', 'graphics card');

    } else {

      message = message.replace('$0', 'browser');

    }

    message = message.replace('$1', names[version]);

    element.innerHTML = message;

    return element;

  }

}