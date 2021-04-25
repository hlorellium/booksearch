import React, { useState } from 'react';
import { Book } from '../booksSlice';
import styles from './BookSnippet.module.css';
import BookModal from '../bookModal/BookModal';

function BookSnippet(props: { book: Book }) {
    const { book } = props;

    const [modalIsOpened, setModalIsOpened] = useState(false);

    const coverSrc = `https://covers.openlibrary.org/b/ID/${book.cover_i}-S.jpg?default=false`;

    return (
        <>
            <div className={styles.item} onClick={() => setModalIsOpened(true)}>
                <img src={coverSrc} alt="" />
                <div>
                    <h3>{book.title}</h3>
                    <span>{book.author_name?.join(', ')} </span>
                </div>
            </div>
            {modalIsOpened ? (
                <BookModal book={book} setModalIsOpened={setModalIsOpened} />
            ) : null}
        </>
    );
}

export default BookSnippet;
