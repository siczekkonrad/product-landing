import React from 'react'
import Container from '../Container'
import LargeImage from '../LargeImage/LargeImage'
import waves from '../../public/images/waves.png'
import styles from './WavesImage.module.scss'

const WavesImage = () => {
    return (
        <div className={styles.WavesImage}>
            <Container>
                <LargeImage image={waves} />
            </Container>
        </div>
    )
}


export default WavesImage