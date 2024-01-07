import React, { useState } from 'react';
import Create from './components/Create';

function Home() {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<h2>To-Do List</h2>
			<Create />
			{todos.length === 0 ? (
				<div>
					<h2>Nothing to do</h2>
				</div>
			) : (
				todos.map((todo) => <div>{todo}</div>)
			)}
		</div>
	);
}

export default Home;
