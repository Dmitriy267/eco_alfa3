import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
export const InfoCardPage: FC = () => {
    const navigate = useNavigate();

    const { width, id, url, height } = useAppSelector((state) => state.cat.cat);

    return (
        <>
            <h1>Информация о карточке</h1>

            <p>Идентификатор: "{id}"</p>
            <p>Url изображения: "{url}"</p>
            <p>Оригинальная ширина изображения: "{width} pх"</p>
            <p>Оригинальная высота изображения: "{height} px"</p>

            <button onClick={() => navigate('/')}>Назад</button>
        </>
    );
};
