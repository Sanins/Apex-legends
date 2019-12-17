import * as React from 'react';

import './Heading.scss';

interface HeadingProps {
    children: any;
    headingType: number;
}
export default function Heading(props: HeadingProps) {

	return(
        <>
            {props.headingType === 1 &&
                <h1 className='heading__h1'>
                    {props.children}
                </h1>
            }
            {props.headingType === 2 &&
                <h2 className='heading__h2'>
                    {props.children}
                </h2>
            }
            {props.headingType === 3 &&
                <h3 className='heading__h3'>
                    {props.children}
                </h3>
            }
            {props.headingType === 4 &&
                <h4 className='heading__h4'>
                    {props.children}
                </h4>
            }
            {props.headingType === 5 &&
                <h5 className='heading__h5'>
                    {props.children}
                </h5>
            }
            {props.headingType === 6 &&
                <h6 className='heading__h6'>
                    {props.children}
                </h6>
            }
        </>
	);
};

