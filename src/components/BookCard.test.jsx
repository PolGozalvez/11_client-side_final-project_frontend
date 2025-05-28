import { describe, test, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BookCard } from "./BookCard";
import styles from "./BookCard.module.css";

describe("Given BookCard component", () => {
    afterEach(() => {
        cleanup();
    });

    test("When Book is completed Then should display with completed status format", () => {
        // Arrange
        const completedBook = {
            id: 1,
            title: "Don Quijote de la Mancha",
            author: "Miguel de Cervantes",
            year: 1605,
            status: "completed"
        };

        // Act
        const { getByText, container } = render(<BookCard item={completedBook}/>);

        // Assert
        expect(getByText("Don Quijote de la Mancha")).toBeDefined();
        expect(container.querySelector(`.${styles["book__status--completed"]}`)).toBeDefined();
    });

    test("When task is pending Then should display with pending status format", () => {
        // Arrange
        const pendingBook = {
            id: 2,
            title: "Hamlet",
            author: "William Shakespeare",
            year: 1603,
            status: "pending"
        };

        // Act
        const { getByText, container } = render(<BookCard item={pendingBook}/>);

        // Assert
        expect(getByText("Hamlet")).toBeDefined();
        expect(container.querySelector(`.${styles["book__status--pending"]}`)).toBeDefined();
    });

    test("When task is in progress Then should display with in-progress status format", () => {
        // Arrange
        const inProgressBook = {
            id: 3,
            title: "Crimen y castigo",
            author: "Fiódor Dostoyevski",
            year: 1866,
            status: "in-progress"
        };

        // Act
        const { getByText, container } = render(<BookCard item={inProgressBook}/>);

        // Assert
        expect(getByText("Crimen y castigo")).toBeDefined();
        expect(container.querySelector(`.${styles["book__status--progress"]}`)).toBeDefined();
    });
});
