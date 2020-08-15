import * as React from 'react';
import 'antd/dist/antd.css';
import './style/index.scss';
import { Link } from 'react-router-dom';

import { Menu, Switch, Divider } from 'antd';
import {
  HomeOutlined,
  CodeSandboxOutlined,
  GlobalOutlined,
  QrcodeOutlined,
} from '@ant-design/icons';

import image from './style/brickpsert.jpg';

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  public state = {
    mode: 'inline',
    theme: 'light',
  };

  public uiData = {

    1: {
      name: '主页(2016版)',
      child: {

      }
    },
    2: {
      name: '主页(2020)',
      child: {

      }
    },
    3: {
      name: 'iThree',
      child: {
        1: {
          name: '主页(2020)',
          child: {

          }
        }
      }
    },
    4: {
      name: 'iCesium',
      child: {
        1: {
          name: '主页(2020)',
          child: {

          }
        }
      }
    },
    5: {
      name: 'info',
      child: {
        1: {
          name: '主页(2020)',
          child: {

          }
        }
      }
    },

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
        <img src={image} className="logo" alt='logo' />
        <br />
        <Switch onChange={this.changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch
          // defaultChecked
          onChange={this.changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{ width: 'auto' }}
          defaultSelectedKeys={['2']}
          // defaultOpenKeys={['sub1']}
          // mode={'inline'}
          // theme={'dark'}
          mode={`${this.state.mode}` as any}
          theme={`${this.state.theme}` as any}
        >

          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/iframe">主页(2016版)</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link to="/">主页(2020)</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<CodeSandboxOutlined />} title="iThree">

            <Menu.Item key="3"><Link to="/page1">Page1</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/menu">menu</Link></Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>

          </SubMenu>

          <SubMenu key="sub2" icon={<GlobalOutlined />} title="iCesium">

            <Menu.Item key="7"><Link to="/page1">Page1</Link></Menu.Item>

            <Menu.Item key="8"><Link to="/">home</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/iframe">iframe</Link></Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <Menu.Item key="link" icon={<QrcodeOutlined />}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              Ant Design
            </a> */}
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
