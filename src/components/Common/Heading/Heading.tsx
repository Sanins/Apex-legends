import * as React from 'react';

import './Heading.scss';

interface HeadingProps {
	id?: string;
}

const Heading:React.StatelessComponent<HeadingProps> = (props) => {

	return(
		<h1 id={props.id}>
			{props.children}
		</h1>
	);
};

export default Heading;
