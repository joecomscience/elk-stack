import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getBooks} from "../actions";
import Spinner from "./Spinner";

const ShowBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, []);

    if (books.length !== 0) {
        return (
            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {books.map(item => {
                    return (<tr key={item.id}>
                        <th>{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        );
    }
   return (<Spinner />);
};

export default ShowBooks;
