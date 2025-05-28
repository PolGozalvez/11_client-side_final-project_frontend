import styles from "./BookCard.module.css";

export const BookCard = ({ item, deleteBook, setEditingBook }) => {
    const { id, title, author, year, status } = item;

    const STATUS_STYLES = {
        pending: styles["book__status--pending"],
        "in-progress": styles["book__status--progress"],
        completed: styles["book__status--completed"],
    };

    const handleDelete = () => {
        if (window.confirm("¿Seguro que quieres eliminar este libro?")) {
            deleteBook(id);
        }
    };

    const handleEdit = () => {
        setEditingBook(item);
    };

    return (
        <li className={styles.book}>
            <div className={styles.book__header}>
                <h4 className={styles.book__title}>{title}</h4>
                <span className={styles.book__year}>{year}</span>
            </div>
            <span className={styles.book__author}>{author}</span>
            <hr className={styles.book__divider} />
            <span className={STATUS_STYLES[status]}>{status}</span>
            <hr className={styles.book__divider} />
            <div className={styles.book__actions}>
                <button className={styles.book__edit} onClick={handleEdit}>
                    Editar
                </button>
                <button className={styles.book__delete} onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </li>
    );
};
