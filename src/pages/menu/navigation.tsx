import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Link } from 'react-router-dom';

import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  public state = {
    mode: 'inline',
    theme: 'light',
  };

  constructor(props: any) {
    super(props);
    console.log(this.state);

  }

  changeMode = (value: boolean) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = (value: boolean) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    return (
      <div>
        <Switch onChange={this.changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={this.changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          // mode={'inline'}
          // theme={'dark'}
          mode={`${this.state.mode}` as any}
          theme={`${this.state.theme}` as any}
        >
          <Menu.Item key="1" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="3"><Link to="/page1">Page1</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/menu">menu</Link></Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="7"><Link to="/page1">Page1</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/">home</Link></Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a href=" " target="_blank" rel="noopener noreferrer">
              Ant Design
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

// ReactDOM.render(<Sider />, document.getElementById('container'));