import "./App.css";
import { Header } from "./components/Header";
import { BookForm } from "./components/BookForm";
import { ListContainer } from "./components/ListContainer";
import { BookList } from "./components/BookList";
//import { useTodos } from "./hooks/useTodos";
import { useBooksApi } from "./hooks/useBookApi";

function App() {
    //const { todos, handleCreateTask } = useTodos();
    const { books, createBook, deleteBook, updateBook } = useBooksApi();

    return (
        <>
            <Header />
            <BookForm addTask={createBook} />
            <ListContainer>
                <BookList
                    books={books}
                    deleteBook={deleteBook}
                    updateBook={updateBook}
                />
            </ListContainer>
        </>
    );
}

export default App;
