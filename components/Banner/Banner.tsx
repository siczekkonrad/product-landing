import React, { FC } from "react"
import Container from "../Container"
import Heading from "../Heading"
import Logo from "../Logo"
import Paragraph from "../Paragraph"
import styles from './Banner.module.scss'
import lenovo from '../../public/images/lenovo.png'
import Section from "../Section"

const Banner: FC = () => {
    return (
        <Section>
            <div className={styles.Banner}>
                <Logo />
                <Container>
                    <div className={styles.Banner__wrapper}>
                        <div>
                            <Heading level={1} className={styles.Banner__heading}>
                                Yoga S740 (14) <br />
                                <span>Wyróżniająca inteligencja</span>
                            </Heading>
                            <img src={lenovo.src} className={styles.Banner__image + ' ' + styles.Banner__small} loading="lazy" />
                            <Paragraph paragraphSize={'medium'}>
                                Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej<br />
                                obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i<br />
                                oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej<br />
                                na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR<br />
                                oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</Paragraph>
                        </div>
                        <img src={lenovo.src} className={styles.Banner__image + ' ' + styles.Banner__desktop} loading="lazy" />
                    </div>
                </Container>
            </div>
        </Section>
    )
}

export default Banner