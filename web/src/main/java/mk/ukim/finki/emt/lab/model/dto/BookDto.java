package mk.ukim.finki.emt.lab.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.emt.lab.model.enums.Category;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookDto {
    private String name;

    private Category category;

    private Long authorId;

    private Integer availableCopies;
}
