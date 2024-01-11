import React, { FC, ReactNode, MouseEventHandler } from "react";
import styles from './section.module.css';

interface SectionProps {
    label: ReactNode; 
    handleClick?: MouseEventHandler<HTMLDivElement>;
}

const Section: FC<SectionProps> = ({ label, handleClick }) => (
    <div className={styles.root}>
        <div className={styles.label}>
            {label}
        </div>
        <div className={styles.more} onClick={handleClick}>
            See All
        </div>
    </div>
);

export default Section;
