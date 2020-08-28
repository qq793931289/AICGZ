import React from 'react';

export class HrefUtil {

  constructor() {
    this.getParamsFromUrl(window.location.href);
  }

  public getParamsFromUrl(url: string) {
    const paramsObj: any = {};
    if (url.indexOf('?') !== -1) {
      const index = url.indexOf('?') + 1;
      // 得到？后的字符串
      const str = url.substr(index);  // postid=10457794&actiontip=保存修改成功')

      // 字符串通过&标识，转为数组
      const arrs = str.split('&');  // ['postid=10457794', 'actiontip=保存修改成功']
      for (let i = 0; i < arrs.length; i++) {
        // 分别将 = 左右两边拆分为数组, 动态变为键值对
        paramsObj[arrs[i].split('=')[0]] = arrs[i].split('=')[1];
        //  arrs[i].split('=')   ['postid', '10457794']
      }
    }
    console.log(paramsObj);
    return paramsObj;
  }

}


// getParamsFromUrl('https://www.baidu.com?postid=10457794&actiontip=保存修改成功');