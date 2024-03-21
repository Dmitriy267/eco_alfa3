import React, { FC } from 'react';
import { useGetCatsQuery, useDeleteCatsMutation } from '../../services/cats';
export const ButtonDelete: FC = () => {
    const { data: cats = [] } = useGetCatsQuery('3');
    const [deleteCats] = useDeleteCatsMutation();

    return (
        <>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    deleteCats(cats.id);
                }}
            >
                Удалить
            </button>
        </>
    );
};
