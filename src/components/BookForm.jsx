import styles from "./BookForm.module.css";
import { useState, useEffect } from "react";

export const BookForm = ({ addTask, updateBook, editingBook, setEditingBook }) => {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        title: "",
        author: "",
        year: "2025",
        status: "pending"
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBook) {
            updateBook(editingBook.id, form);
            setEditingBook(null);
        } else {
            addTask(form);
        }
        setForm({ title: "", author: "", year: "2025", status: "pending" });
        setShowForm(false);
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
        setEditingBook(null);
        setForm({ title: "", author: "", year: "2025", status: "pending" });
    };

    return (
        <>
            <button
                className={styles.button}
                type="button"
                onClick={handleShowForm}
            >
                {showForm ? "Cancel" : "Add New Book"}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <h3 className={styles.title}>
                            {editingBook ? "Edit Book" : "Add New Book"}
                        </h3>
                        <label className={styles.separator}>
                            Title
                            <input
                                className={styles.inputs}
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Author
                            <input
                                className={styles.inputs}
                                type="text"
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Year
                            <input
                                className={styles.inputs}
                                type="number"
                                name="year"
                                value={form.year}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Status
                            <select
                                className={styles.inputs}
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </label>
                        <div className={styles.button__container}>
                            <button className={styles.button} type="submit">
                                {editingBook ? "Save Changes" : "Add Book"}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};
