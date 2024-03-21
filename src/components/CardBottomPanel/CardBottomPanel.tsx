import React, { FC } from 'react';
import styles from './CardBottomPanel.module.scss';
type CardBottomPanelProps = {
    children: React.ReactNode;
};
export const CardBottomPanel: FC<CardBottomPanelProps> = ({ children }) => {
    return <div className={styles.panel}>{children}</div>;
};
