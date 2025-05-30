import { useState, useEffect } from "react";

export function useBookForm(editingBook, setEditingBook, addTask, updateBook) {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        title: "",
        author: "",
        year: "2025",
        status: "pending",
    });

    useEffect(() => {
        if (editingBook) {
            setForm(editingBook);
            setShowForm(true);
        }
    }, [editingBook]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setForm({ title: "", author: "", year: "2025", status: "pending" });
        setShowForm(false);
        setEditingBook(null);
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
        setEditingBook(null);
        setForm({ title: "", author: "", year: "2025", status: "pending" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBook) {
            updateBook(editingBook.id, form);
            setEditingBook(null);
        } else {
            addTask(form);
        }
        resetForm();
    };

    return {
        showForm,
        form,
        handleChange,
        handleShowForm,
        resetForm,
        handleSubmit,
    };
}
