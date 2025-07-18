import { useState } from 'react'
import './App.css'
import Board from './components/Board';

export type CardType = {
	id: number;
	text: string;
};

export type BoardState = {
	todo: CardType[];
	inProgress: CardType[];
	done: CardType[];
};

const defaultBoard: BoardState = {
	todo: [],
	inProgress: [],
	done: [],
};

function App() {
	const [board, setBoard] = useState<BoardState>(defaultBoard);
	const [taskText, setTaskText] = useState<string>('');

	const addCard = () => {
		if (!taskText.trim()) return;
		const newCard: CardType = { id: Date.now(), text: taskText };
		setBoard(prev => ({
			...prev,
			todo: [...prev.todo, newCard],
		}));
		setTaskText('');
	};

	return (
		<div className="app">
			<h1>Mini Kanban Board</h1>
			<div className="add-task">
				<input
					placeholder="Add task"
					value={taskText}
					onChange={e => setTaskText(e.target.value)}
				/>
				<button onClick={addCard}>Add</button>
			</div>
			<Board board={board} setBoard={setBoard} />
		</div>
	)
}

export default App