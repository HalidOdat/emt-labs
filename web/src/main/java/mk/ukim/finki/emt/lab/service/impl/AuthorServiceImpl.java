package mk.ukim.finki.emt.lab.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.lab.model.Author;
import mk.ukim.finki.emt.lab.model.Country;
import mk.ukim.finki.emt.lab.model.exceptions.AuthorNotFoundException;
import mk.ukim.finki.emt.lab.model.exceptions.CountryNotFoundException;
import mk.ukim.finki.emt.lab.repository.AuthorRepository;
import mk.ukim.finki.emt.lab.service.CountryService;
import mk.ukim.finki.emt.lab.model.exceptions.InvalidArgumentsException;
import mk.ukim.finki.emt.lab.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryService countryService;

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> save(String name, String surname, Long countryId) {
        if(name.equals("") || surname.equals(""))
            throw new InvalidArgumentsException();
        Optional<Country> country = this.countryService.findById(countryId);
        if(country.isEmpty())
            throw new CountryNotFoundException(countryId);

        Author author = new Author(name, surname, country.get());
        return Optional.of(this.authorRepository.save(author));
    }

    @Override
    public Optional<Author> findById(Long id) {
        if (id == null) {
            throw new InvalidArgumentsException();
        }
        return this.authorRepository.findById(id);
    }

    @Override
    public Optional<Author> update(Long id, String name, String surname, Long countryId) {
        Optional<Author> author = this.findById(id);
        if(author.isEmpty())
            throw new AuthorNotFoundException(id);

        Optional<Country> country = this.countryService.findById(countryId);
        if(country.isEmpty())
            throw new CountryNotFoundException(countryId);

        Author a = author.get();
        a.setName(name);
        a.setSurname(surname);
        a.setCountry(country.get());
        return Optional.of(this.authorRepository.save(a));
    }

    @Override
    public void deleteById(Long id) {
        if(this.findById(id).isEmpty())
            throw new AuthorNotFoundException(id);
        this.authorRepository.deleteById(id);
    }
}
