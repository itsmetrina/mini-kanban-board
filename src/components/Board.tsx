import type { BoardState } from "../App";
import { moveCard } from "../utils/boardUtils";
import Column from "./Column"

type BoardProps = {
    board: BoardState;
    setBoard: React.Dispatch<React.SetStateAction<BoardState>>;
};

const Board = ({ board, setBoard }: BoardProps) => {
    const handleMoveCard = (id: number, from: keyof BoardState, to: keyof BoardState) => {
        const updated = moveCard(board, id, from, to);
        setBoard(updated);
    };

    return (
        <div className="board">
            {(Object.keys(board) as (keyof BoardState)[]).map(column => (
                <Column
                    key={column}
                    title={column}
                    cards={board[column]}
                    moveCard={handleMoveCard}
                />
            ))}
        </div>
    )
}

export default Board