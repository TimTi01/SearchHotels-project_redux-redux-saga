import React from 'react';
import styles from './hotelsListContent.module.scss'
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import Slider from "./Slider/Slider";
import FavoritesCounter from "./FavoritesCounter/FavoritesCounter";
import HotelsList from "./HotelsList/HotelsList";

const HotelsListContent = () => {
    return (
        <div className={styles.hotelsListContent}>
            <div className={styles.hotelsListContent__Container}>
                <BreadCrumbs/>
                <Slider/>
                <FavoritesCounter/>
                <HotelsList/>
            </div>
        </div>
    );
};

export default HotelsListContent;