

export class Statement {

  constructor() {
    this.init();
  }

  public init() {
    console.log(
      [
        '%caicgz.com',
        '%c时间: 2020-08',
        '%c主页: www.aicgz.com',
        '%cCELL: 13725353558',
        '%cINFO: CANTON  CHINA 😊',
      ].join('\n').toString(),
      `
          background:url(http://www.aicgz.com/static/media/wechat.c14cf6c8.jpg) no-repeat left center;
          background-size:30px 40px;
          padding-left:40px;
          line-height:50px;
          font-size: 18px;
          font-weight:bold;
          color:#00D4FF
          `,
      `
          background:none;
          line-height:30px;
          font-size: 18px;
          font-weight:bold;
          color:#00D4FF
          `,
      `
           padding-left:40px;
          background:none;
          line-height:30px;
          font-size: 18px;
          font-weight:bold;
          color:#00D4FF
          `,
      `
          background:none;
          line-height:30px;
          font-size: 18px;
          font-weight:bold;
          color:#00D4FF
          `,
      `
          padding-left:40px;
          background:none;
          line-height:30px;
          font-size: 18px;
          font-weight:bold;
          color:#00D4FF
          `,
    );
  }

}

