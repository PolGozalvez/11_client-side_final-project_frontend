import styles from "./BookCard.module.css";

export const BookCard = ({ item, deleteBook, updateBook }) => {
    const { id, title, author, year, status } = item;

    const STATUS_STYLES = {
        pending: styles["task__status--pending"],
        "in-progress": styles["task__status--progress"],
        completed: styles["task__status--completed"],
    };

    const handleDelete = () => {
        if (window.confirm("¿Seguro que quieres eliminar este libro?")) {
            deleteBook(id);
        }
    };

    const handleEdit = () => {
        alert("Funcionalidad de editar pendiente de implementar");
    };

    return (
        <li className={styles.task}>
            <div className={styles.task__header}>
                <h4 className={styles.task__title}>{title}</h4>
                <span className={styles.task__year}>{year}</span>
            </div>
            <span className={styles.task__author}>{author}</span>
            <hr className={styles.task__divider} />
            <span className={STATUS_STYLES[status]}>{status}</span>
            <hr className={styles.task__divider} />
            <div className={styles.task__actions}>
                <button className={styles.task__edit} onClick={handleEdit}>Editar</button>
                <button className={styles.task__delete} onClick={handleDelete}>Eliminar</button>
            </div>
        </li>
    );
};
