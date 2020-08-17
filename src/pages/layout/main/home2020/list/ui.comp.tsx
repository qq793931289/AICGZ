import * as React from 'react';

import { List, Avatar } from 'antd';

const data = [
  {
    title: '整体架构',
    description: 'React + Typescript',
  },
  {
    title: '状态数管理',
    description: 'React-Redux',
  },
  {
    title: '路由控制',
    description: 'React-Router',
  },
  {
    title: 'UI框架',
    description: 'Antd',
  },
  {
    title: '3D绘制',
    description: 'Three.js',
  },
  {
    title: '数据请求',
    description: 'axios',
  },
  {
    title: 'TBD',
    description: 'TBD',
  },
];

export class ListStack extends React.Component {

  render() {
    return (

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2694481281,2660752652&fm=26&gp=0.jpg'}`} />}
              title={<a href="https://reactjs.org/">{item.title}</a>}
              // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              description={item.description}
            />
          </List.Item>
        )}
      />
    )
  }

}

