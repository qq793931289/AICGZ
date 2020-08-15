import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  // Link
} from 'react-router-dom';
import Home from '../home/home';
import Page1 from '../page1/page1';
import Iframe from './main/iframe/index';
import MenuM from '../components/ui/menu/index';
// import 'antd/dist/antd.scss';
import './index.scss';
// import style from './index.scss';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default class BaseLayout extends React.Component {

  // constructor(props: any) {
  //   super(props);

  // }

  render() {
    return (
      <Layout className='layout'>

        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width={256}
          theme='light'
        >

          {/* <div className="logo" /> */}

          {/* <BaseLayout /> */}

          <MenuM />

        </Sider>

        <Layout >

          {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}

          <Content className='content' style={{ margin: '0px 0px 0' }}>
            <div className="site-layout-background" style={{ padding: 0, minHeight: 360, height: '100%' }}>
              {/* content */}
              <Switch >

                <Route exact path="/" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/menu" component={MenuM} />
                <Route path="/iframe" component={Iframe} />

              </Switch>
            </div>
          </Content>

          {/* <Footer style={{ textAlign: 'center' }}>ICP</Footer> */}

        </Layout>

      </Layout>
    )
  };



};

