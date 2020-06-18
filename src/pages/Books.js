import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../actions";
import BookTable from "../components/BookTable";
import Spinner from "../components/Spinner";

const Books = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBooks());
    });

    if(books.length !== 0) {
        return (<BookTable/>);
    }

    return <Spinner/>;
};

export default Books;
