// Define the Book class
class Book {
    constructor(title) {
      this.title = title;
    }
  }
  
  // Initial fake books
  const fakeBooks = [
    new Book("The Great Gatsby"),
    new Book("To Kill a Mockingbird"),
    new Book("1984")
  ];
  
  // Initialize books array with fake books
  let books = [...fakeBooks];
  
  // ... (Previous code remains the same)

// Function to reset books to fakeBooks
function resetToFakeBooks() {
    // Reset books to fakeBooks
    books = [...fakeBooks];
    displayBooks();
  }
  
  // ... (Remaining code remains the same)
  
  
  // Function to display books
  function displayBooks() {
    const bookListContainer = document.getElementById('bookList');
    // Clear previous content
    bookListContainer.innerHTML = '';
  
    // Loop through the books and display each one
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.textContent = book.title;
      bookListContainer.appendChild(bookElement);
    });
  }
  
  // Function to add a book
  function addBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    if (bookTitle.trim() !== '') {
      const newBook = new Book(bookTitle);
      books.push(newBook);
      displayBooks();
      // Clear the input field after adding the book
      document.getElementById('bookTitle').value = '';
    }
  }
  
  // Function to remove a book
  function removeBook() {
    const bookTitleToRemove = document.getElementById('removeBookTitle').value;
    books = books.filter(book => book.title !== bookTitleToRemove);
    displayBooks();
    // Clear the input field after removing the book
    document.getElementById('removeBookTitle').value = '';
  }
  
  // Function to show the add book form
  function showAddBookForm() {
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('addBookForm').style.display = 'block';
    document.getElementById('removeBookForm').style.display = 'none';
  }
  
  // Function to show the remove book form
  function showRemoveBookForm() {
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('addBookForm').style.display = 'none';
    document.getElementById('removeBookForm').style.display = 'block';
  }
  
  // Initial display
  displayBooks();
  