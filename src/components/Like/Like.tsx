import React, { FC, useState, MouseEvent } from 'react';
import styles from './Like.module.scss';
import { SvgLike } from '../../components/SvgLike/SvgLike';
import { useAppDispatch } from '../../hooks/hooks';
import { getLike } from '../../redux/features/Like/likeSlice';
export const Like: FC = () => {
    const [like, setLike] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const handleClickToggleLike = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setLike((prev) => !prev);
        setColor(!color);
        dispatch(getLike(true));
    };
    return (
        <div className={styles.like}>
            <SvgLike
                onClick={handleClickToggleLike}
                fill={color ? '#000' : '#ff2400'}
            />
            <p>{+like}</p>
        </div>
    );
};
