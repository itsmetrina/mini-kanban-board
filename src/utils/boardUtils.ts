import type { BoardState, CardType } from "../App";

export function moveCard(
    board: BoardState,
    id: number,
    from: keyof BoardState,
    to: keyof BoardState
): BoardState {
    const cardToMove: CardType | undefined = board[from].find(c => c.id === id);
    console.log(board, id, from, to, 'board, id, from, to')
    if (!cardToMove) return board;

    return {
        ...board,
        [from]: board[from].filter(c => c.id !== id),
        [to]: [...board[to], cardToMove],
    };
}