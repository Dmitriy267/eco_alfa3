import React, { FC } from 'react';
import { SvgLikeProps } from '../../models/SvgLikeProps';

export const SvgLike: FC<SvgLikeProps> = ({ onClick, fill }) => {
    return (
        <svg
            onClick={onClick}
            id="svg"
            fill={fill}
            stroke="#000000"
            width="30"
            height="30"
            version="1.1"
            viewBox="144 144 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="IconSvg_bgCarrier" strokeWidth="0"></g>
            <g
                id="IconSvg_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0"
            >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m400 630.84-35.129-35.129c-130.48-115.42-215.79-193.21-215.79-288.56 0-77.785 60.219-138 138.01-138 42.656 0 85.312 20.074 112.91 52.691 27.551-32.617 70.258-52.691 112.91-52.691 77.785 0 138 60.219 138 138 0 95.352-85.312 173.14-215.79 288.56z"
                ></path>
            </g>
            <g id="IconSvg_iconCarrier">
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m400 630.84-35.129-35.129c-130.48-115.42-215.79-193.21-215.79-288.56 0-77.785 60.219-138 138.01-138 42.656 0 85.312 20.074 112.91 52.691 27.551-32.617 70.258-52.691 112.91-52.691 77.785 0 138 60.219 138 138 0 95.352-85.312 173.14-215.79 288.56z"
                ></path>
            </g>
        </svg>
    );
};
