import React, {useState} from 'react';
import styles from './HotelCard.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {GoldStar, GreyStar} from "../../../../svg/starsSvg";
import {ActivatedHeartSvg, NotActivatedHeartSvg} from "../../../../svg/heartSvg";
import {addFavoriteHotel, delFavoriteHotel} from "../../../../redux/reducers/addToFavoritesReducer";


const HotelCard = ({id, stars, hotelName, price}) => {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [activatedSvg, setActivatedSvg] = useState(false)

    const getHotel = (id) => {
        let hotel

        data.data.forEach((item) => {
            if (item.hotelId === id) {
                hotel = item
            }
        })

        return hotel
    }

    const handleClick = (id) => {
        setActivatedSvg(!activatedSvg)
        if (activatedSvg === false) {
            dispatch(addFavoriteHotel(getHotel(id)))
        } else {
            dispatch(delFavoriteHotel(id))
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.container__avatar}>
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9358 1.33499C15.1647 2.06053 12.0585 4.98008 9.03699 7.82127C6.01277 10.6596 3.11707 13.3847 2.59753 13.8722C2.078 14.3598 1.33972 15.0534 0.956909 15.4104C0.574097 15.7702 0.202222 16.1214 0.131128 16.1939L-0.00012207 16.3245L0.902222 17.3983C1.39714 17.9875 1.82097 18.4692 1.84011 18.4692C1.86199 18.4663 3.48894 16.9572 5.45769 15.1143C15.7882 5.44442 17.4561 3.88887 17.4753 3.89468C17.4862 3.90048 18.7604 5.09326 20.3081 6.54723C21.853 8.0012 25.3448 11.2806 28.0628 13.8374C30.7807 16.3942 33.0175 18.4866 33.0311 18.4866C33.0448 18.4866 33.0639 18.4721 33.0721 18.4576C33.0858 18.4344 33.1022 18.4373 33.1296 18.4605C33.1815 18.504 33.1022 18.5911 34.0565 17.4419C34.4749 16.9398 34.8577 16.4813 34.9096 16.4232L35.0026 16.3187L32.7112 14.1741C31.4507 12.9929 28.4893 10.2184 26.1268 8.00991C23.7671 5.79848 20.8796 3.09659 19.7093 2.00248L17.5874 0.0145168H17.4643H17.3413L15.9358 1.33499Z" fill="#41522E"/>
                        <path d="M15.605 8.00708C14.6096 8.94157 11.8589 11.5274 9.49363 13.7504L5.19519 17.7931L5.20066 26.1281L5.20886 34.4631L5.26902 34.5821C5.30183 34.6489 5.38113 34.7504 5.44402 34.8056C5.67097 35.0145 5.37839 35 9.71238 35H13.6171L13.6225 31.3056C13.6307 27.6315 13.6307 27.614 13.6882 27.4834C13.7593 27.3151 13.896 27.17 14.0546 27.0946C14.1776 27.0336 14.1968 27.0336 17.4014 27.0249C20.9671 27.0162 20.8139 27.0104 21.0163 27.199C21.1585 27.3325 21.2378 27.4805 21.2706 27.6721C21.2925 27.7882 21.3007 28.9897 21.3007 31.4217V35L25.3585 34.9942L29.419 34.9855L29.501 34.9014C29.5475 34.8549 29.6241 34.7185 29.6733 34.5966L29.7635 34.3761L29.769 26.0759L29.7745 17.7757L23.6495 12.044C20.1768 8.79356 17.4999 6.30932 17.4698 6.30932C17.4343 6.30642 16.7944 6.88975 15.605 8.00708Z" fill="#41522E"/>
                    </svg>
                </div>
                <div className={styles.container__info}>
                    <span className={styles.info__title}>{hotelName}</span>
                    <div className={styles.info__WrapDateAndDays}>
                        <span className={styles.wrapDateAndDays__date}>{data.date}</span>
                        <span className={styles.wrapDateAndDays__days}>- {data.days} день</span>
                    </div>
                    <div className={styles.info__WrapStars}>
                        {[...Array(stars)].map((value, index) => (
                            <GoldStar key={index}/>
                        ))}
                        {[...Array(5 - stars)].map((value, index) => (
                            <GreyStar key={index}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.container__favoriteAndPrice}>
                <div className={styles.favoriteAndPrice__wrapButton}>
                    <button className={styles.wrapButton__Button} onClick={() => handleClick(id)}>
                        {activatedSvg
                            ? <ActivatedHeartSvg/>
                            : <NotActivatedHeartSvg/>
                        }
                    </button>
                </div>
                <div className={styles.favoriteAndPrice__price}>
                    <span className={styles.price__text}>
                        Price:
                    </span>
                    <span className={styles.price__number}>
                        {price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;