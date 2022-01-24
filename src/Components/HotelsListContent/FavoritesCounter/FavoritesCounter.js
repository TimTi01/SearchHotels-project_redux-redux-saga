import React from 'react';
import styles from './FavoritesCounter.module.scss'
import {useSelector} from "react-redux";

const FavoritesCounter = () => {
    const favoritesHotels = useSelector(state => state.addToFavorites.favoritesHotels)

    const declensionWords = (num, arrText) => {
        if (num % 10 === 1 && num % 100 !== 11) {
            return arrText[0];
        } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
            return arrText[1];
        }
        return arrText[2];
    }

    return (
        <div className={styles.container}>
            <span className={styles.container__text}>Добавлено в Избранное:</span>
            <span className={styles.container__number}>{favoritesHotels.length}</span>
            <span className={styles.container__text}>
                {declensionWords(favoritesHotels.length, ['отель', 'отеля', 'отелей'])}
            </span>
        </div>
    );
};

export default FavoritesCounter;