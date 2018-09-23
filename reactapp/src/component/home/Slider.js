import React, { Component } from 'react';
import { Carousel,Flex} from 'antd-mobile';


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          val:"1",
          items:[
            {
              img:'meishi',
              title:"美食"
            },
            {
              img:'dianying',
              title:"电影"
            },
            {
              img:'jiudian',
              title:"酒店"
            },
            {
              img:'yule',
              title:"娱乐"
            },
            {
              img:'waimai',
              title:"外卖"
            },
            {
              img:'ktv',
              title:"ktv"
            },
            {
              img:'zhoubianyou',
              title:"周边游"
            },
            {
              img:'liren',
              title:"丽人"
            },
            {
              img:'xiaochi',
              title:"小吃"
            },
            {
              img:'jipiao',
              title:"机票"
            }
          ]
        },{
          val:"2",
          items:[
            {
              img:'meishi',
              title:"美食"
            },
            {
              img:'dianying',
              title:"电影"
            },
            {
              img:'jiudian',
              title:"酒店"
            },
            {
              img:'yule',
              title:"娱乐"
            },
            {
              img:'waimai',
              title:"外卖"
            },
            {
              img:'ktv',
              title:"ktv"
            },
            {
              img:'zhoubianyou',
              title:"周边游"
            },
            {
              img:'liren',
              title:"丽人"
            }
          ]
        }
      ]
    }
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  // componentDidUpdate() {
  //   // After the new child element is rendered, change the slideIndex
  //   // https://github.com/FormidableLabs/nuka-carousel/issues/327
  //   if (this.state.slideIndex !== this.state.data.length - 1) {
  //     /* eslint react/no-did-update-set-state: 0 */
  //     this.setState({ slideIndex: this.state.data.length - 1 });
  //   }
  // }
  render() {
    return (
      <div className="slider">
        <Carousel>
          {this.state.data.map((item, index) => (
            <div
              className="slider-content"
              key={item.val + index}
            >
              <Flex wrap="wrap">
                {item.items.map((item,index)=>(
                  <div 
                    className="inline"
                    key={index+'il'}
                  >
                  <img src={require(`../../assets/img/${item.img}.png`)} alt=""/>
                  <p>{item.title}</p>
                  </div>
                ))}
              </Flex>
              
            </div>
          ))}
        </Carousel>
        </div>
    );
  }
}
