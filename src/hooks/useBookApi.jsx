import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useBooksApi() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const createBook = async (book) => {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book),
        });
        const saved = await res.json();
        setBooks((prevBooks) => [...prevBooks, saved]);
    };

    const deleteBook = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    };

    const updateBook = async (id, updatedBook) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedBook),
        });
        const saved = await res.json();
        setBooks((prevBooks) =>
            prevBooks.map((book) => (book.id === id ? saved : book)),
        );
    };

    return { books, createBook, deleteBook, updateBook };
}
