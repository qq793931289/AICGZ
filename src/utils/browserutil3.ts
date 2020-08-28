import React from 'react';
// 'use strict';
// const fitChromeVersionNumber = 58;
// const fitSafariVersionNumber = 11;
// const getURLParameter = function (name) {
//   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ''])[1].replace(/\+/g, '%20')) || null;
// };
// let coupon = getURLParameter('coupon');
// let env = getURLParameter('env');
// coupon = coupon || (env && env.toLowerCase() === 'ihome' ? 'ysjj' : '');
// let urlQueryStrings = coupon ? ('?coupon=' + coupon) : '';
// let ua = window.navigator.userAgent.toLowerCase();
// let getBrowserType = function () {
//   if (ua.indexOf('msie') > 0) {
//     return 'msie';
//   }
//   if (ua.indexOf('firefox') > 0) {
//     return 'firefox';
//   }
//   if (ua.indexOf('opera') > 0) {
//     return 'opera';
//   }
//   if (ua.indexOf('safari') > 0) {
//     return 'safari';
//   }
//   if (ua.indexOf('camino') > 0) {
//     return 'camino';
//   }
//   if (ua.indexOf('gecko') > 0) {
//     return 'gecko';
//   }
//   return null;
// };

// let browserType = getBrowserType();
// if (browserType === 'safari' && ua.indexOf('chrome') > 0) {
//   let spiltValue = 'chrome/';
//   let position = ua.indexOf(spiltValue) + spiltValue.length;
//   let number = ua.substr(position, 2);
//   let version = Number.parseInt(number, 10);
//   if (version < fitChromeVersionNumber) {
//     window.location.href = './browsercheck.html' + urlQueryStrings;
//   }
// }
// if (browserType !== 'safari' && browserType !== 'firefox') {
//   window.location.href = './browsercheck.html' + urlQueryStrings;
// }
// if (browserType === 'safari' && ua.indexOf('version/') > 0) {
//   let spiltValue = 'version/';
//   let position = ua.indexOf(spiltValue) + spiltValue.length;
//   let number = ua.substr(position, 2);
//   let version = Number.parseInt(number, 10);
//   if (version < fitSafariVersionNumber) {
//     window.location.href = './browsercheck.html' + urlQueryStrings;
//   }
// }
