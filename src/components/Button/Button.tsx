import * as React from 'react';

export interface ButtonProps {
	onClick(e:React.MouseEvent<HTMLButtonElement>):void;
}

export interface ButtonState {
	clicked: boolean;
}

export class Button extends React.PureComponent<ButtonProps, ButtonState> {

	constructor(props:ButtonProps) {
		super(props);

		this.state = {
			clicked: false,
		};

		this.buttonClicked = this.buttonClicked.bind(this);
	}

	private buttonClicked(e:React.MouseEvent<HTMLButtonElement>) {
		this.props.onClick(e);
	}

	public render() {

		return(
			<button
				onClick={this.buttonClicked}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
