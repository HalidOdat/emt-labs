# EMT lab exercises

Setting up test data

```bash
curl -i -X POST -H 'Content-Type: application/json' http://localhost:9091/api/countries/add\?name=Spain\&continent=Europe
curl -i -X POST -H 'Content-Type: application/json' http://localhost:9091/api/authors/add\?name="AuthorName1"\&surname="AuthorSurname1"\&countryId=1
curl -i -X POST -H 'Content-Type: application/json' http://localhost:9091/api/authors/add\?name="AuthorName2"\&surname="AuthorSurname2"\&countryId=1
```
