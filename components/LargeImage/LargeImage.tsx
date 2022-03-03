import React, { FC } from 'react'
import styles from './LargeImage.module.scss'

interface LargeImageProps {
    image: any;
}

const LargeImage: FC<LargeImageProps> = ({ image }) => {
    return (
        <div className={styles.LargeImage}>
            <img src={image.src} alt={'image'} loading="lazy" />
        </div>
    )
}


export default LargeImage