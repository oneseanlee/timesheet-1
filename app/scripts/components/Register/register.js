import './register.scss';
import React, { Component } from 'react';
import { Api } from '../../core';

class Register extends Component {
	handleSubmit(e) {
		e.preventDefault();

		let { pushState } = this.props.history;
		let firstName = this.refs.firstname.value;
		let lastName = this.refs.lastname.value;
		let email = this.refs.email.value;
		let mobile = this.refs.mobile.value;
		let approval = false;
		let address = {
			apt: this.refs.apt.value,
			street: this.refs.street.value,
			city: this.refs.city.value,
			state: this.refs.state.value
		};

		let formData = {
			firstName,
			lastName,
			email,
			mobile,
			approval,
			address
		};

		Api.Registration.post(formData).then(() => {
			pushState(null, '/register_success/' + formData.email);
		});
	}

	render() {
		return (
			<div className="register">
				<form ref="registerForm" className="register-form">
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
						    <input ref="firstname" type="text" className="form-control" id="firstname" placeholder="First Name" required/>
						  </div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
						    <input ref="lastname" type="text" className="form-control" id="lastname" placeholder="Last Name" required/>
						  </div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
						    <input ref="email" type="email" className="form-control" id="email" placeholder="Email" required/>
						  </div>
						</div>
						<div className="col-sm-6">
						  <div className="form-group">
						    <input ref="mobile" type="tel" className="form-control" id="mobile" placeholder="Mobile" required/>
						  </div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<div className="form-group">
								<input ref="apt" type="text" className="form-control" id="apt" placeholder="Apt #111" required/>
							</div>
						</div>
						<div className="col-sm-8">
							<div className="form-group">
								<input ref="street" type="text" className="form-control" id="street" placeholder="Street" required/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-5">
							<div className="form-group">
								<input ref="city" type="text" className="form-control" id="city" placeholder="City" required/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="form-group">
								<input ref="state" type="text" className="form-control" id="state" placeholder="State" required/>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="form-group">
								<input ref="zipcode" type="text" className="form-control" id="zipcode" placeholder="Zipcode" required/>
							</div>
						</div>
					</div>
					<button type="submit" onClick={::this.handleSubmit} className="btn btn-primary">Register</button>
				</form>
			</div>
		);
	}
}

export default Register;
