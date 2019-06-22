import React, { Component } from 'react';
import './Thanks.css'
import Image from './thanks.png'
export default class Contact extends Component {
	state={
		time:""
	}
	componentDidMount (){
		this.timefunction();
	}
	timefunction=()=>{
		let today=new Date();
		let time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		this.setState({
			time
		})
		
	}
    render() {
		var myVar = setInterval(this.timefunction, 1000); 
        return (
		<div>
		<div className="backgroundd">
		<div className="parent">
		<div className="child">
		<div className="">
		<div className="card">
  <h5 className="card-header">Thank You!</h5>
  <div className="card-body custombody">
   <div className="row modifiedrow">
   <div className="col-md-6 col-sm-12">
	<h1 className="time">{this.state.time}</h1>
	<h3 style={{fontWeight:"700"}}>Congratulations,Broker account created</h3>
	<p className="card-text py-3">Check your emailfor a verification link.After verifying your email only you can log in to your broker account.</p>
    <a href="#" className="btn btn-primary custombutton">Go to Brokerage</a>
	</div>
	<div className="col-md-6 col-sm-12 mobilehide">
	<img src={Image} className="iimage"/>
	</div>
	</div>
  </div>
</div>
		</div>
		</div>
		</div>
		</div>
		</div>
		)
		}
		}