import React from 'react';
type Props = {
	name?: string;
};
const Hello = ({name}: Props) => (
	<h1 className='Hello'>Hello {name || 'World'}</h1>
);
export default Hello;
