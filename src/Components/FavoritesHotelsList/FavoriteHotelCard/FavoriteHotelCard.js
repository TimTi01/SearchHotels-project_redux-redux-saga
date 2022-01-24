import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "./favoriteHotelCard.module.scss";
import {ActivatedHeartSvg} from "../../../svg/heartSvg";
import {GoldStar, GreyStar} from "../../../svg/starsSvg";
import {delFavoriteHotel} from "../../../redux/reducers/addToFavoritesReducer";

const FavoriteHotelCard = ({id, name, price, stars}) => {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(delFavoriteHotel(id))
    }

    return (
        <div className={style.wrap}>
            <div className={style.wrap__ContainerTitleAndButton}>
                <span className={style.containerTitleAndButton__title}>
                    {name}
                </span>
                <button className={style.containerTitleAndButton__button} onClick={() => handleClick(id)}>
                    <ActivatedHeartSvg/>
                </button>
            </div>

            <div className={style.wrap__ContainerDateAndDay}>
                <span className={style.containerDateAndDay__date}>{data.date}</span>
                <span className={style.containerDateAndDay__day}>- {data.days} день</span>
            </div>

            <div className={style.wrap__ratingAndPrice}>
                <div className={style.ratingAndPrice__ContainerStars}>
                    {[...Array(stars)].map((value, index) => (
                        <div className={style.containerStars__star} key={index}>
                            <GoldStar/>
                        </div>
                    ))}
                    {[...Array(5 - stars)].map((value, index) => (
                        <div className={style.containerStars__star} key={index}>
                            <GreyStar/>
                        </div>
                    ))}
                </div>

                <div className={style.ratingAndPrice__ContainerPrice}>
                    <div>
                        <span className={style.containerPrice__text}>Price:</span>
                    </div>
                    <span className={style.containerPrice__numbers}>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default FavoriteHotelCard;