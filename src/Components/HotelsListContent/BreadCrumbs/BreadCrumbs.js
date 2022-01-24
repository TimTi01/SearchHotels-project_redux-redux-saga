import React from 'react';
import styles from "./BreadCrumbs.module.scss";
import ArrowSvg from "../../../svg/arrowSvg";
import {useSelector} from "react-redux";

const BreadCrumbs = () => {
    const formState = useSelector(state => state.form)

    return (
        <div className={styles.Container__breadCrumbsWrap}>
            <div className={styles.breadCrumbsWrap__breadCrumbs}>
                <span className={styles.breadCrumbs__span}> Отели </span>
                <ArrowSvg/>
                <span className={styles.breadCrumbs__span}> {formState.location} </span>
            </div>

            <div className={styles.breadCrumbsWrap__dateWrap}>
                        <span className={styles.breadCrumbs__date}>
                            {formState.date}
                        </span>
            </div>
        </div>
    );
};

export default BreadCrumbs;