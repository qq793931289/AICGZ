import * as React from 'react';
import { Card } from 'antd';
// import 'antd/dist/antd.scss';

// import Iframe from '../../../components/ui/iframe';
import { ICard, ICardProps } from './card';
import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

const DemoBox = (props: any) => <p className={`height-${props.value}`}>{props.children}</p>;

const DemoCard = (props: any) =>
  < Col flex="1 1 256px" >
    <DemoBox value={50}>
      <ICard
        imgUrl={props.element.imgUrl}
        link={props.element.link}
        title={props.element.title}
        description={props.element.description}
        isHref={props.element.isHref || false}
      />
    </DemoBox>
  </Col >;



export class Home2016 extends React.Component {

  render() {

    const baseUrl = 'http://www.aicgz.com/home2015';

    const props: ICardProps[] = [
      {
        imgUrl: baseUrl + '/images/1.jpg',
        link: '/vr',
        title: 'VR全景交互',
        description: 'html/css/js/canvas',
      },
      {
        imgUrl: baseUrl + '/images/2.jpg',
        link: baseUrl + '/air',
        title: '二维游戏',
        description: 'canvas/原生js编程',
        isHref: true,
      },
      {
        imgUrl: baseUrl + '/images/3.jpg',
        link: '/tiyanqu',
        title: '三维体验厅',
        description: 'canvas/webgl/threejs',
      },
      {
        imgUrl: baseUrl + '/images/4.jpg',
        link: '/zhanshiqu',
        title: '三维展示厅',
        description: 'canvas/webgl/threejs',
      },
    ];

    return (
      <div>
        < Row justify="space-between" align="middle" style={{ height: '100vh' }}>
          {
            props.map((element, index) => (
              <DemoCard element={element} />
            ))
          }
        </Row>
      </div >
    );
  }
}