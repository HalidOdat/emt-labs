import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        authorId: 0,
        availableCopies: 0
    })


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(props.book)
        const name = formData.name || props.book.name
        const category = formData.category || props.book.category
        const author = formData.authorId || props.book.author.id
        const availableCopies = formData.availableCopies || props.book.availableCopies

        props.onEditBook(props.book.id, name, category, author, availableCopies)
        navigate("/books")
    }

    return (
        <div className="row mt-5 justify-content-center">
            <h2 className={"text-center"}>Edit book</h2>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} autoComplete={"off"}>
                    <div className="form-group my-3">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}/>
                    </div>

                    <div className="form-group my-3">
                        <label>Category</label>
                        <select name="category"
                                className="form-control"
                                onChange={handleChange}>
                            {props.categories.map((term) => {
                                if (props.book.category !== undefined &&
                                    props.book.category === term)
                                    return <option selected={props.book.category} value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label>Author</label>
                        <select name="authorId"
                                className="form-control"
                                onChange={handleChange}>
                            {props.authors.map((term) => {
                                if (props.book.author !== undefined &&
                                    props.book.author.id === term.id)
                                    return <option key={term.id} selected={props.book.author.id}
                                                   value={term.id}>{term.name + " " + term.surname}</option>
                                else return <option key={term.id} value={term.id}>{term.name + " " + term.surname}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               min={1}
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
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
export default BookEdit;