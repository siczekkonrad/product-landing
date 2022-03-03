import React, { FC } from 'react'

interface SectionProps {
    className?: string | any;
}

const Section: FC<SectionProps> = ({ children, className }) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default Section