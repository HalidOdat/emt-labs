import React from "react";
import {useNavigate} from "react-router-dom";

const BookAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        authorId: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.authorId;
        const availableCopies = formData.availableCopies;
        props.onAddBook(name, category, author, availableCopies);
        navigate("/books");
    }

    return (
        <div className="row mt-5 justify-content-center">
            <h2 className={"text-center"}>Add new book</h2>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} autoComplete={"off"}>
                    <div className="form-group my-3">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="Enter book name"
                               required
                               onChange={handleChange}/>
                    </div>
                    <div className="form-group my-3">
                        <label>Category</label>
                        <select name="category"
                                className="form-control"
                                onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label>Author</label>
                        <select name="authorId"
                                className="form-control"
                                onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option key={term.id} value={term.id}>{term.name + " " + term.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               min={1}
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Enter available number of copies"
                               required
                               onChange={handleChange}/>
                    </div>
                    <div className={"d-grid gap-2"}>
                        <button id="submit" type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default BookAdd;