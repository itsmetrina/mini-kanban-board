import type { BoardState, CardType } from "../App";

export function moveCard(
    board: BoardState,
    id: number,
    from: keyof BoardState,
    to: keyof BoardState
): BoardState {
    const cardToMove: CardType | undefined = board[from].find(c => c.id === id);
    if (!cardToMove) return board;

    return {
        ...board,
        [from]: board[from].filter(c => c.id !== id),
        [to]: [...board[to], cardToMove],
    };
}