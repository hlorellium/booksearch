import React, { useState } from 'react';
import { Book } from '../booksSlice';
import { ReactComponent as CrossIcon } from '../../../cross.svg';
import styles from './BookModal.module.css';

function BookModal(props: {
    book: Book;
    setModalIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { book, setModalIsOpened } = props;

    const [publisherIsTruncated, setPublisherIsTruncated] = useState(
        book.publisher && book.publisher.length > 6
    );
    const [isbnIsTruncated, setIsbnIsTruncated] = useState(
        book.isbn && book.isbn.length > 6
    );

    const coverSrc = `http://covers.openlibrary.org/b/ID/${book.cover_i}-L.jpg?default=false`;

    return (
        <div
            className={styles.wrapper}
            onClick={() => setModalIsOpened((prev) => !prev)}
        >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <CrossIcon
                    className={styles.crossIcon}
                    onClick={() => setModalIsOpened((prev) => !prev)}
                />
                <div className={styles.container}>
                    <img src={coverSrc} alt="" />
                    <div className={styles.content}>
                        <h2>{book.title}</h2>
                        <span>by</span>
                        <h3>{book.author_name?.join(', ')}</h3>
                        {book.first_publish_year ? (
                            <p>
                                <span className={styles.highlighted}>
                                    First published in{' '}
                                </span>
                                {book.first_publish_year}
                            </p>
                        ) : null}
                        {book.publisher ? (
                            publisherIsTruncated ? (
                                <p>
                                    <span className={styles.highlighted}>
                                        Published by{' '}
                                    </span>
                                    {book.publisher?.slice(0, 4).join(', ')}...
                                    <span
                                        className={styles.lineClamp}
                                        onClick={() =>
                                            setPublisherIsTruncated(
                                                (prev) => !prev
                                            )
                                        }
                                    >
                                        Show more
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    <span className={styles.highlighted}>
                                        Published by{' '}
                                    </span>
                                    {book.publisher?.join(', ')}
                                    <span
                                        className={styles.lineClamp}
                                        onClick={() =>
                                            setPublisherIsTruncated(
                                                (prev) => !prev
                                            )
                                        }
                                    >
                                        Show less
                                    </span>
                                </p>
                            )
                        ) : null}

                        {book.isbn ? (
                            isbnIsTruncated ? (
                                <p>
                                    <span className={styles.highlighted}>
                                        ISBN:{' '}
                                    </span>
                                    {book.isbn?.slice(0, 4).join(', ')}...
                                    <span
                                        className={styles.lineClamp}
                                        onClick={() =>
                                            setIsbnIsTruncated((prev) => !prev)
                                        }
                                    >
                                        Show more
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    <span className={styles.highlighted}>
                                        ISBN:{' '}
                                    </span>
                                    {book.isbn?.join(', ')}
                                    <span
                                        className={styles.lineClamp}
                                        onClick={() =>
                                            setIsbnIsTruncated((prev) => !prev)
                                        }
                                    >
                                        Show less
                                    </span>
                                </p>
                            )
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookModal;
