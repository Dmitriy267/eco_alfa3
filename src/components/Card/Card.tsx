import React, { FC } from 'react';
import { useGetCatsQuery } from '../../services/cats';
import styles from './Card.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import {
    getIdCat,
    getUrlCat,
    getWidthCat,
    getHeightCat,
} from '../../redux/features/Cat/catSlice';

import { Cat } from '../../models/Cat';
import { CardProps } from '../../models/CardProps';

export const Card: FC<CardProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { data: cats = [], error, isLoading } = useGetCatsQuery('3');

    return (
        <div className={styles.mainDiv}>
            {error && <p>Ошибка запроса</p>}
            {isLoading && <p>Загрузка данных...</p>}
            {cats
                ? cats.map((cat: Cat) => {
                      return (
                          <div
                              key={cat.id}
                              className={styles.blockCard}
                              onClick={() => {
                                  dispatch(getUrlCat(cat.url));
                                  dispatch(getWidthCat(cat.width));
                                  dispatch(getHeightCat(cat.height));
                                  dispatch(getIdCat(cat.id));
                                  navigate('/infoCardPage');
                              }}
                          >
                              <img
                                  src={`${cat.url}`}
                                  alt="Случайное изображение"
                                  className={styles.img}
                              />
                              <div className={styles.info}>
                                  <h4>Сведения об изображении</h4>
                                  <p>
                                      Оригинальная ширина изображения: "
                                      {cat.width} pх"
                                  </p>
                                  <p>
                                      Оригинальная высота изображения: "
                                      {cat.height} px"
                                  </p>
                              </div>

                              {children}
                          </div>
                      );
                  })
                : null}
        </div>
    );
};
