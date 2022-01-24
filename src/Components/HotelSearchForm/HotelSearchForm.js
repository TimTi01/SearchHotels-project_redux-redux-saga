import React from 'react';
import styles from './hotelSearchForm.module.scss'
import {useForm} from "../../hooks/useForm";
import {nowDate} from "../../utils";
import {useDispatch} from "react-redux";
import {loadData} from "../../redux/reducers/dataReducer";

const HotelSearchForm = () => {
    const dispatch = useDispatch()

    const searchHotels = () => {
        dispatch(loadData(values))
    }

    const [values, handleChange, handleSubmit] = useForm(searchHotels)

    return (
        <>
            <form id='form'
                  onSubmit={handleSubmit}
                  className={styles.app__hotelSearchFrom}
            >
                <div className={styles.hotelSearchFrom__container}>
                    <label className={styles.inputWrap__label}>
                        Локация
                        <input
                            className={styles.inputWrap__input}
                            onChange={handleChange}
                            type="text"
                            name='location'
                            autoFocus
                            value={values.location || ''}
                        />
                    </label>
                    <label className={styles.inputWrap__label}>
                        Дата заселения
                        <input
                            className={styles.inputWrap__input}
                            onChange={handleChange}
                            type="date"
                            name='date'
                            value={values.date || nowDate}
                        />
                    </label>
                    <label className={styles.inputWrap__label}>
                        Количество дней
                        <input
                            className={styles.inputWrap__input}
                            onChange={handleChange}
                            type="number"
                            name='days'
                            value={values.days || 1}
                        />
                    </label>

                    <div className={styles.hotelSearchFrom__buttonWrap}>
                        <button
                            type='submit'
                            className={styles.buttonWrap__button}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default HotelSearchForm;