package mk.ukim.finki.emt.lab.service.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.lab.model.enums.Category;
import mk.ukim.finki.emt.lab.repository.CategoryRepository;
import mk.ukim.finki.emt.lab.service.CategoryService;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }
}
