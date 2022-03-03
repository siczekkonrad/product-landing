import React, { FC } from "react"
import styles from './Paragraph.module.scss'

type ParagraphProps = {
    paragraphSize?: 'medium' | 'large';
    className?: any;
}

const paragraphStyle = {
    'large': styles.large,
    'medium': styles.medium
}

const Paragraph: FC<ParagraphProps> = ({ paragraphSize, children, className }) => {
    return (
        <p className={paragraphStyle[paragraphSize ? paragraphSize : 'medium'] + ' ' + className + ' ' + styles.paragraph}>
            {children}
        </p>
    )
}

export default Paragraph