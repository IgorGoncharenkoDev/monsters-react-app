import React from 'react';

import { CardStyled } from './card.styles';

const Card = ({ name, id, email }) => (
	<CardStyled>
		<img src={ `https://robohash.org/${ id }?set=set2` } alt=""/>
		<h2>{ name }</h2>
		<p>{ email }</p>
	</CardStyled>
);

export default Card;
