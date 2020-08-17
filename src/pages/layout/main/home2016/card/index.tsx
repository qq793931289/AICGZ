import * as React from 'react';
import { Card } from 'antd';
import { CardInterface } from 'antd/lib/card';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export interface ICardProps {
  imgUrl: string;
  link: string;
  title: string;
  description: string;
  isHref?: boolean;

}


export class ICard extends React.Component<ICardProps> {

  private _imgUrl: string = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
  private _link: string = '/iframehome2016';
  private _title: string = 'Europe Street beat';
  private _description: string = 'www.instagram.com';
  private _isHref: boolean = false;

  constructor(props: ICardProps) {
    super(props);
    this._imgUrl = props.imgUrl;
    this._link = props.link;
    this._title = props.title;
    this._description = props.description;
    if (props.isHref) {
      this._isHref = props.isHref;
    }
  }

  render() {
    return (
      <Card
        hoverable
        style={{ width: 512 }}
        cover={
          // <Iframe url={'http://www.baidu.com'} />

          this._isHref ?
            <a href={this._link} target='iframename'>
              <img alt="example" src={this._imgUrl} style={{ width: 512 }} />
            </a>
            :
            <Link to={this._link}>
              <img alt="example" src={this._imgUrl} style={{ width: 512 }} />
            </Link>

        }
        onClick={

          () => {
            console.log(this._link);
          }
        }
      >



        <Meta title={this._title} description={this._description} />

      </Card >
    );
  }
}