import React from "react";
import ReactPaginate from 'react-paginate'
import BookItem from "../BookItem/BookItem";
import { Link } from "react-router-dom";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        // console.log(books, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                                <tr>
                                    <th scope={"col"}>Name</th>
                                    <th scope={"col"}>Category</th>
                                    <th scope={"col"}>Author</th>
                                    <th scope={"col"}>Available Copies</th>
                                    <th scope={"col"}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {books}
                            </tbody>

                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 d-grid gap-2">
                                <Link className={"btn btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={this.handlePageClick}
                    previousLabel={"back"}
                    nextLabel={"next"}
                    breakLabel={<a href="/#">...</a>}
                    breakClassName={"break-me"}
                    pageClassName={"ml-1"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={"pagination m-4 justify-content-center"}
                    activeClassName={"active"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"page-item disabled"} />

            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        // console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        // console.log(offset, nextPageOffset)
        return this.props.books.sort((a, b) => a.id - b.id).map((term) => {
            return (
                <BookItem term={term}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onMarkBook={this.props.onMarkBook} />
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Books;
