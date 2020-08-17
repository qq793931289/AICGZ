import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  // Link
} from 'react-router-dom';
import { Row, Col, Divider,Layout, Menu  } from 'antd';
import Home from './main/home2020/ui.comp';
import Page1 from '../page1/page1';
import { Home2016 } from './main/home2016/index';
import MenuM from '../components/ui/menu/index';
// import 'antd/dist/antd.scss';
import './index.scss';
// import style from './index.scss';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { IframeHome2016, IframeHome2016VR, IframeHome2016Tiyanqu, IframeHome2016Zhanshiqu } from './main/home2016/iframe';
import { IContact } from './main/contact/ui.comp';

const { Header, Content, Footer, Sider } = Layout;


const style = { background: '#0092ff', padding: '8px 0' };

const DemoBox = (props: any) => <p className={`height-${props.value}`}>{props.children}</p>;

// const Default = <div>Default</div>;

class Default extends React.Component {

  public render() {
    return (
      <div>Default</div>
    );
  }

}

export default class BaseLayout extends React.Component {

  // constructor(props: any) {
  //   super(props);

  // }

  public render() {
    return (
      <Layout className='layout'>

        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width={256}
          theme='light'
        >

          {/* <div className='logo' /> */}

          {/* <BaseLayout /> */}

          <MenuM />

        </Sider>

        <Layout >

          <Header className='site-layout-sub-header-background' style={{ padding: 0, background: '#f0f2f5' }}>

            <Row justify='space-around' align='middle'>

              <Col span={8}>
                <DemoBox value={50}>
                  <div>本网站持续更新中。。。(2020/08/16)</div>
                </DemoBox>
              </Col>

            </Row>
          </Header>

          <Content className='content' style={{ margin: '0px 0px 0' }}>
            <div className='site-layout-background' style={{ padding: 24, minHeight: 360, height: '100%' }}>
              {/* content */}
              <Switch >

                {/* <Route exact path='/' component={IframeHome2016} /> */}
                <Route path='/iframehome2016' component={IframeHome2016} />

                {/* <Route exact path='/' component={Home2016} /> */}
                <Route path='/home2016' component={Home2016} />

                <Route path='/home' component={Home} />
                <Route path='/page1' component={Page1} />
                <Route path='/menu' component={MenuM} />
                <Route path='/contact' component={IContact} />

                <Route path='/vr' component={IframeHome2016VR} />
                {/* <Route path='/air' component={IframeHome2016Air} /> */}
                <Route path='/tiyanqu' component={IframeHome2016Tiyanqu} />
                <Route path='/zhanshiqu' component={IframeHome2016Zhanshiqu} />

              </Switch>
            </div>
          </Content>

          {/* <Footer style={{ textAlign: 'center' }}>ICP</Footer> */}

        </Layout>

      </Layout>
    );
  }

}

