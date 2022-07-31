import React from 'react'
import './album.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import moment from 'moment'


const Album = ({link,image,title,price,date}) => {

    function formatDate(date, format) {
        return moment(date).format(format);
    };
  return (
    <ul className="album">

            <li className="album-item">
                <Link to={link} target="blank" className="link">
                    <LazyLoad height={200} >
                        <img className="album-img" src={image} alt={'itunes' + Math.random()} />
                    </LazyLoad>
                </Link>
            </li>

            <li className="title album-item">
                <Link to={link} target="blank" className="link">
                    {title.slice(0, 20)}..</Link></li>
            <li className="price album-item">Price:{price}</li>

            <li className="date album-item">Released:{formatDate(date, "MMM Do YY")}</li>


        </ul>
  )
}

export default Album
