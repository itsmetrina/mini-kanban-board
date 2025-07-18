import type { BoardState, CardType } from '../App';
import { toTitleCase } from '../utils/textUtils';
import Card from './Card'

type ColumnProps = {
    title: keyof BoardState;
    cards: CardType[];
    moveCard: (id: number, from: keyof BoardState, to: keyof BoardState) => void;
};

const Column = ({ title, cards, moveCard }: ColumnProps) => {
    return (
        <div className="column">
            <h2>{toTitleCase(title)}</h2>
            <div className="column-cards">
                {cards.map(card => (
                    <Card key={card.id} card={card} from={title} moveCard={moveCard} />
                ))}
            </div>
        </div>

    )
}

export default Column