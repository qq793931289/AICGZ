

export class Statement {

  constructor() {
    this.init();
  }

  public init() {



    const LogStyle2 =
      `
      color: yellow;
      background: green;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      `
      ;
    const LogStyle: string[] = [
      '%c%s',
      LogStyle2,
    ];

    console.log(
      [
        '%c ',
        '%c aicgz.com',
        '%c 时间: 2020-08-16',
        '%c 主页: www.aicgz.com',
        '%c CELL: 13725353558',
        '%c INFO: CANTON  CHINA 😊',
        '%c ',
      ].join('\n').toString(),
      `
          ${LogStyle2}
          width: 300px;
          height: 400px;
          background:url(http://www.aicgz.com/static/media/wechat.c14cf6c8.jpg) no-repeat left center;
          background-size:300px 400px;
          `,

      LogStyle2, LogStyle2, LogStyle2, LogStyle2, LogStyle2, LogStyle,


    );
  }

}

