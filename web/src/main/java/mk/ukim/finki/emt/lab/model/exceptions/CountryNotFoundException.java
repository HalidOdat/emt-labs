package mk.ukim.finki.emt.lab.model.exceptions;

public class CountryNotFoundException extends RuntimeException {
    public CountryNotFoundException(Long id){
        super(String.format("Country %d does not exist.", id));
    }
}
