import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { buscar } from '../api/api';
import { Link } from 'react-router-dom';

const ListPosts = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        buscar(url, setPosts)
    }, [url])

    return (
        <section className='posts container'>
            {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`}>
                        <article>
                            <h2 className="post-card__title">{title}</h2>
                            <p className="post-card__text">{metadescription}</p>
                        </article>
                    </Link>
                })
            }
        </section>
    )
}

export default ListPosts;