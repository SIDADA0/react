import React, { Component } from 'react'
import { Icon } from 'antd';
import Img from './Img';
import Buy from './Buy';
import Group from './Group';
import Comment from './Comment';
import 'whatwg-fetch';
import './../../assets/css/Detail-img.css';
import './../../assets/css/Detail.css';
import NavHeader from './../global/NavHeader';

export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments:[],
			product:{}
		}
	}
	componentDidMount() {
		
		fetch('http://www.xiechenxi.cn/welcome/detail/'+this.props.match.params.id)
		.then(function(response) {
			return response.json()
		}).then((json)=>{
			this.setState({
				product:json.row,
				comments:json.results
			})
			
		}).catch(function(ex) {
			console.log(ex)
		})
	}
	render() {
		return (
			<div>
				<NavHeader/>
				<Img 
					image={this.state.product.img}
					name={this.state.product.product_name}
					description={this.state.product.description}
				></Img>
				<Buy
					curPrice={this.state.product.discount_price} 
					oldPrice={this.state.product.price}
				></Buy>
				<Group title="商家信息">
					<div className="seller">
						<div className="seller-left">
						{/* {
							console.log('aa',this.state.product.product_name)
						} */}
							<h5>{this.state.product.business_name}</h5>
							<p>{this.state.product.business_address}</p>
						</div>
						<div className="seller-right">
							<Icon type="phone" theme="twoTone" twoToneColor="#06c1ae"/>
						</div>
					</div>
				</Group>
				<Group title="购买须知">
					<div className="seller">
						<ul className="notice-item-des" data-reactid="176">
							<li className="much-content" data-reactid="177">无需预约，消费高峰时可能需要等位</li>
							<li className="much-content" data-reactid="178">每张美团券最多1位成人使用，身高1.2米以上儿童计入人数</li>
							<li className="much-content" data-reactid="179">1.2米（ 不含）以下，具体事情，详情咨询商家</li>
							<li className="much-content" data-reactid="180">尤家街店4月3日开始接待</li>
							<li className="much-content" data-reactid="181">团购用户不可同时享受商家其他优惠</li>
							<li className="much-content" data-reactid="182">部分菜品因时令原因有所不同，请以店内当日实际供应为准</li>
							<li className="much-content" data-reactid="183">提供免费WiFi</li>
							<li className="much-content" data-reactid="184">停车位收费标准：详询商家</li>
						</ul>
					</div>
				</Group>
				<Group title="评价">
					{
						this.state.comments.map((item)=>{
							return <Comment item={item} key={item.id}></Comment>
						})
					}
				</Group>
			</div>
		)
	}
}
