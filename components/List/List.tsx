import React, { FC } from 'react'
import listStyles from './List.module.scss'

interface ListProps {
    technicalData: Array<string>
}
const List: FC<ListProps> = ({ technicalData }) => {
    return (
        <ul className={listStyles.List}>
            {technicalData?.length > 0 && technicalData.map(({ item }: any, index) => (
                <li className={listStyles.List__element} key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default List