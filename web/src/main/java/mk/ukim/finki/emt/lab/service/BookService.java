package mk.ukim.finki.emt.lab.service;

import mk.ukim.finki.emt.lab.model.Book;
import mk.ukim.finki.emt.lab.model.dto.BookDto;
import mk.ukim.finki.emt.lab.model.enums.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> findById(Long id);

    Optional<Book> update(Long id, String name, Category category, Long authorId, Integer availableCopies);
    
    Optional<Book> update(Long id, BookDto bookDto);

    void deleteById(Long id);

    Optional<Book> markAsTaken(Long id);
}
