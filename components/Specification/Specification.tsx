import React, { FC } from 'react'
import Container from 'components/Container';
import Section from 'components/Section';
import styles from './Specification.module.scss'

interface SpecificationProps {
    children: any;
    className?: any;
}

const Specification: FC<SpecificationProps> = ({ children, className }) => {
    return (
        <Section className={styles.Specification + ' ' + className}>
            <Container>
                {children}
            </Container>
        </Section>
    )
}

export default Specification