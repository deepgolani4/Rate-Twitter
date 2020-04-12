import React,{ Component } from 'react';
import { Input, Button } from "antd";
import { Row, Col, message, notification } from 'antd';
import { connect } from 'react-redux';
import { addCard } from '../redux/actions/index';
 
class ProfileTetxbox extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = input_text => {
		//push card if it's not available
		if(!this.props.cards.some((obj) => obj.username === input_text)) {
			let newCard = 
			<Col xs = { 20 }
			md = { 7 }
			lg = { 7 }
			xl = { 7 }
			key = { input_text }
			style = {0
				{ paddingBottom: 20 }
			}>
			</Col>
			this.props.addCard(newCard, input_text)
		}

		if(this.props.cards.legth === 0) {
			notification.info({
				message:'Search for another username to compare your Twitter score',
			});
		} 
	};

	render() {

		return(
			<div>
				<Row type = "flex"
				justify = "center
				style = {
					{padding: 40}
				}>

				<Col md={10}
				lg={10}
				xl={10}
				xs={
					{span: 19}
				}
				gutter = {24}>

				<Input.Search placeholder="Twitter Username"
				enterButton = {
					<Button type = "primary"
					icon = "Twitter">
					Search
					</Button>}
					size="large"
					onSearch = { value => this.onSubmit(value) }/>
				</Col>
				</Row>


				<Row type = "flex"
				justify = "center"
				gutter= {24}>
					this.props.cards.reduce((acc,obj) => [...acc,obj.card],[]) }
				</Row>
			</div>



		);
	}
}

const mapStateToProps = state => ({
	cards: state.cardsReducer.cards
});

export default connect(mapStateToProps, { addCard })(ProfileTetxbox);