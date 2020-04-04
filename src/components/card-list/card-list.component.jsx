import React from 'react';

import Card from '../card/card.component';

import { CardListStyled } from './card-list.styles';

const CardList = ({ monsters }) => {
	return (
		<CardListStyled>
			{
				monsters.map((monster) => (
					<Card key={ monster.id } { ...monster }/>
				))
			}
		</CardListStyled>
	)
};

export default CardList;
