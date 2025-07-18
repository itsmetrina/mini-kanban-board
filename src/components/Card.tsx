import type { BoardState, CardType } from "../App";

type CardProps = {
    card: CardType;
    from: keyof BoardState;
    moveCard: (id: number, from: keyof BoardState, to: keyof BoardState) => void;
};

const Card = ({ card, from, moveCard }: CardProps) => {
    const targets: (keyof BoardState)[] = (['todo', 'inProgress', 'done'] as (keyof BoardState)[]).filter(t => t !== from);

    return (
        <div className="card">
            <p>{card.text}</p>
            <div className="move-buttons">
                {targets.map(target => (
                    <button key={target} onClick={() => moveCard(card.id, from, target)}>
                        → {target}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Card