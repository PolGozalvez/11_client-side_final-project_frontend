import styles from "./BookForm.module.css";
import { useBookForm } from "../hooks/useBookForm";

export const BookForm = ({
    addTask,
    updateBook,
    editingBook,
    setEditingBook,
}) => {
    const { showForm, form, handleChange, handleShowForm, handleSubmit } =
        useBookForm(editingBook, setEditingBook, addTask, updateBook);

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
                                <option value="read">Read</option>
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
