import React, { FC } from "react"
import styles from './Heading.module.scss'

type HeadingProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

const classTag = {
    1: styles.h1,
    2: styles.h2,
    3: styles.h3,
    4: styles.h4,
    5: styles.h5,
    6: styles.h6
};

const Heading: FC<HeadingProps> = ({ level, children, className }) => {

    const TagName = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <TagName className={classTag[level ? level : 2] + ' ' + className || styles.h2}>{children}</TagName>
    )
}

export default Heading