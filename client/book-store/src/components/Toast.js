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
					<Toast className="border border-success bg-success text-white" show={this.props.children.show}>
						<ToastHeader className="bg-success text-white" closeButton={false}>
							<strong className="mr-auto"></strong>
						</ToastHeader>
						<ToastBody>
								 {this.props.children.message}
						</ToastBody>
					</Toast>
				</div>
			)
		}
}