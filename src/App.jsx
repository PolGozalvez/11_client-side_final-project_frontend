import "./App.css";
import { Header } from "./components/Header";
import { BookForm } from "./components/BookForm";
import { ListContainer } from "./components/ListContainer";
import { BookList } from "./components/BookList";
import { useBooksApi } from "./hooks/useBookApi";
import { useState } from "react";

function App() {
    const { books, createBook, deleteBook, updateBook } = useBooksApi();
    const [editingBook, setEditingBook] = useState(null);

    return (
        <>
            <Header />
            <BookForm
                addTask={createBook}
                updateBook={updateBook}
                editingBook={editingBook}
                setEditingBook={setEditingBook}
            />
            <ListContainer>
                <BookList
                    books={books}
                    deleteBook={deleteBook}
                    setEditingBook={setEditingBook}
                />
            </ListContainer>
        </>
    );
}

export default App;
