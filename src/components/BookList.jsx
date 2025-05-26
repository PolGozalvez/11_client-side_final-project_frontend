import { BookCard } from "./BookCard";

export function BookList({ books = [], deleteBook, updateBook }) {
    return (
        <ul>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    item={book}
                    deleteBook={deleteBook}
                    updateBook={updateBook}
                />
            ))}
        </ul>
    );
}
