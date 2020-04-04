import React from 'react';

import { SearchStyled } from './search.styles';

const Search = ({ placeholder, value, handleChange }) => (
	<SearchStyled
		type="search"
		placeholder={ placeholder }
		value={ value }
		onChange={ e => handleChange(e.target.value) }
	/>
);

export default Search;
