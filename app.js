// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI tasks

class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '252671825363'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '749407518932'
            }
        ];
        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt"></i>`;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Events: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a book

//Event: remove a book