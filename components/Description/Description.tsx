import Container from "components/Container";
import Section from "components/Section"
import React, { FC } from "react"
import styles from './Description.module.scss'

interface DescriptionProps {
    children?: any;
    className?: any;
}

const Description: FC<DescriptionProps> = ({ children, className }) => {
    return (
        <Section className={styles.Description + ' ' + className}>
            <Container>
                {children}
            </Container>
        </Section>
    )
}

export default Description