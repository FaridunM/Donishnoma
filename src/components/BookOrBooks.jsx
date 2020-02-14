import React from 'react';
import book from './BookOrBooks.module.css';

class bookOrBooks extends React.Component {
    render() {
        let button = document.getElementsByClassName(`${book.button}`);

        function hover() {
            button[0].style.background = 'red';
            button[0].style.border = 'red';
            button[0].style.color = '#fff';
        }

        function buttonHover() {
            button[0].style.boxShadow = '0 0 2px 2px #F88466';
        }

        function unHover() {
            button[0].style.background = '#2E2F2F';
            button[0].style.border = 'grey';
            button[0].style.color = '#F88466';
        }

        function buttonUnHover() {
            button[0].style.boxShadow = null;
        }

        return(
            <section className={book.book} onMouseEnter={hover} onMouseLeave={unHover}>
                <section className={book.head}>
                    Энсиклопедияи Советии Тоҷик
                </section>
                <section className={book.body}>
                    <figure>
                        <img src="books.png" alt=""/>
                        <figcaption>
                            Аввалин донишномаи бисёрҷилдаи универсалӣ ба забони тоҷикӣ...
                        </figcaption>
                    </figure>
                    <button className={book.button} onMouseEnter={buttonHover} onMouseLeave={buttonUnHover}>Бештар...</button>
                </section>
            </section>
        );
    }
};

export default bookOrBooks;