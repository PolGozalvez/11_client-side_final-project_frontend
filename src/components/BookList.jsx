import { BookCard } from "./BookCard";

export const BookList = ({ itemList }) => {
    return (
        <ul>
            {itemList.map((item) => {
                const { uuid } = item;

                return <BookCard key={uuid} item={item} />;
            })}
        </ul>
    )
}
