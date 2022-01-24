import React from 'react';
import styles from './FavoritesHotelsList.module.scss'
import {useSelector} from "react-redux";
import FavoriteHotelCard from "./FavoriteHotelCard/FavoriteHotelCard";


const FavoritesHotelsList = () => {
    const favoritesHotels = useSelector(state => state.addToFavorites.favoritesHotels)

    return (
        <div className={styles.favoritesHotelsList}>
            <div className={styles.favoritesHotelsList__container}>
                <span className={styles.container__title}>Избранное</span>
                <div className={styles.favoritesHotelsList__containerButton}>
                    <button className={styles.containerButton__button} style={{marginRight: '8px'}}>Рейтинг</button>
                    <button className={styles.containerButton__button}>Цена</button>
                </div>
                <div className={styles.favoritesHotelsList__wrapFavoritesHotels}>
                    <div className={styles.wrapFavoritesHotels__container}>
                        {favoritesHotels.length === 0
                            ? <span className={styles.container__wrapText}>В избранном пусто</span>
                            : favoritesHotels.map((hotel) => (
                                <FavoriteHotelCard key={hotel.hotelId}
                                                   id={hotel.hotelId}
                                                   name={hotel.hotelName}
                                                   price={hotel.priceFrom}
                                                   stars={hotel.stars}
                                />))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesHotelsList;