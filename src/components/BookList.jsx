import { BookCard } from "./BookCard";

export function BookList({ books = [], deleteBook, setEditingBook }) {
    return (
        <ul>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    item={book}
                    deleteBook={deleteBook}
                    setEditingBook={setEditingBook}
                />
            ))}
        </ul>
    );
}
