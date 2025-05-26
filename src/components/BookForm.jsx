import styles from "./BookForm.module.css";
import { useState } from "react";

export const BookForm = ({ addTask }) => {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const author = formData.get("author");
        const year = formData.get("year");
        const status = formData.get("status");
        
        const newBook = { title, author, year, status };
        
        addTask(newBook);
        event.target.reset();
        setShowForm(false);
    };

    return (
        <>
            <button
                className={styles.button}
                type="button"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Cancel" : "Add New Book"}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <h3 className={styles.title}>Add New Book</h3>
                        <label className={styles.separator}>
                            Title
                            <input
                                className={styles.inputs}
                                type="text"
                                name="title"
                                placeholder="Enter book title"
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Author
                            <input
                                className={styles.inputs}
                                type="text"
                                name="author"
                                placeholder="Enter author name"
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Year
                            <input
                                className={styles.inputs}
                                type="number"
                                name="year"
                                defaultValue="2025"
                                required
                            />
                        </label>
                        <label className={styles.separator}>
                            Status
                            <select
                                className={styles.inputs}
                                name="status"
                                defaultValue="pending"
                            >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </label>
                        <div className={styles.button__container}>
                            <button className={styles.button} type="submit">
                                Add Book
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};
