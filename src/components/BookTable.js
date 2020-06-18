import React from "react";
import {useSelector} from "react-redux";

const BookTable = () => {
    const books = useSelector(state => state.books);

    return (<table className="table is-bordered is-striped is-hoverable">
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
};

export default BookTable;
