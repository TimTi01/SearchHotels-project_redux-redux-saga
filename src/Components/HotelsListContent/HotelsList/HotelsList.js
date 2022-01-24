import React from 'react';
import styles from './HotelsList.module.scss'
import HotelCard from "./HotelCard/HotelCard";
import {useSelector} from "react-redux";

const HotelsList = () => {
    const data = useSelector(state => state.data)

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {data.data.length === 0
                    ? <div className={styles.container__wrapText}>
                        <span>Вы ничего не выбрали!</span>
                    </div>
                    : data.data.map((hotel) => (
                        <HotelCard key={hotel.hotelId}
                                   id={hotel.hotelId}
                                   stars={hotel.stars}
                                   hotelName={hotel.hotelName}
                                   price={hotel.priceAvg}
                        />))
                }
            </div>
        </div>
    );
}

export default HotelsList;