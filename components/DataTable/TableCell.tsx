import React, { FC } from 'react'
import cellStyle from './TableCell.module.scss'

interface TableCellProps {
    children?: any;
    cellType: string;
}

const TableCell: FC<TableCellProps> = ({ children, cellType }) => {
    return (
        <div className={cellType == 'th' ? cellStyle.th : cellStyle.td}>
            {children}
        </div>
    )
}

export default TableCell