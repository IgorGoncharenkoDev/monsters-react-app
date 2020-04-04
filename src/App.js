import React, { useState, useEffect } from 'react';

import Search from './components/search/search.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://jsonplaceholder.typicode.com/users');
			const monsters = await data.json();
			setMonsters(monsters);
		};

		fetchData();
	}, [])

	const handleSearchQuery = (searchQuery) => {
		setSearchQuery(searchQuery);
	};

	const filteredMonsters = monsters.filter(
		monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));

	console.log(filteredMonsters);

	return (
		<div className="App">
			<Search
				placeholder="Search monsters"
				value={ searchQuery }
				handleChange={ handleSearchQuery }
			/>
			<CardList monsters={ filteredMonsters }/>
		</div>
	)
};

export default App;
