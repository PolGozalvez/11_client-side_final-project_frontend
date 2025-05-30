import { describe, test, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BookForm } from "./BookForm";

describe("Given BookForm component", () => {
    afterEach(() => {
        cleanup();
    });

    test('When a book is provided Then should display the title in the form', () => {
        // Arrange
        const book = {
            title: 'Book',
            author: 'Pol',
            year: 2025,
            status: 'pending'
        };

        // Act
        const { getByDisplayValue } = render(
            <BookForm editingBook={book}/>
        );

        // Assert
        expect(getByDisplayValue("Book")).toBeDefined();
    });

    test('When no book is provided and form is opened Then should show empty title field', () => {
        // Arrange
        const book = {
            title: '',
            author: '',
            year: 2025,
            status: 'pending'
        };

        // Act
        const { container } = render(
            <BookForm editingBook={book}/>
        );
        const titleInput = container.querySelector('input[name="title"]');

        // Assert
        expect(titleInput.value).toBe('');
    });
});
