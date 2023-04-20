import React from "react";
import {Link} from "react-router-dom";

const BookItem = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name + " " + props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td scope={"col"} className={"text-center"}>
                <a title={"Delete"}
                   className={"btn btn-danger mx-1"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info mx-1"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Delete"}
                   className={`btn btn-outline-dark mx-1 ${props.term.availableCopies == 0 ? "disabled" : ""}`}
                   onClick={() => props.onMarkBook(props.term.id)}>
                    Mark as taken
                </a>
            </td>
        </tr>
    );
}

export default BookItem;