import React,{Component} from "react";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

export default class Toaster extends Component {
		render(){

			const toastCss = {
					position: 'fixed',
					top: '20px',
					right: '20px'
			}
			return(
				<div style={toastCss}>
					<Toast className={`border text-white ${this.props.type==="success" ? "border-success bg-success" : "border-danger bg-danger" }`} show={this.props.show}>
						<ToastHeader className={`text-white ${this.props.type==="success" ? "bg-success" : "bg-danger" }`} closeButton={false}>
							<strong className="mr-auto"></strong>
						</ToastHeader>
						<ToastBody>
								 {this.props.message}
						</ToastBody>
					</Toast>
				</div>
			)
		}
}