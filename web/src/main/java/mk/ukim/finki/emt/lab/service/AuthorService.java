package mk.ukim.finki.emt.lab.service;

import mk.ukim.finki.emt.lab.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    List<Author> findAll();

    Optional<Author> save(String name, String surname, Long countryId);

    Optional<Author> findById(Long id);

    Optional<Author> update(Long id, String name, String surname, Long countryId);
    
    void deleteById(Long id);
}
