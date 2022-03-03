import React, { FC } from 'react'
import tableStyles from './DataTable.module.scss'
import TableCell from './TableCell';

interface DataTableProps {
    specData: Array<{
        title: string;
        description: Array<String>;
        smallInfo?: any;
    }>
}
const DataTable: FC<DataTableProps> = ({ specData }) => {
    return (
        <div className={tableStyles.DataTable}>
            {specData?.length > 0 && specData.map(({ title, description, smallInfo }, index) => {
                return (
                    <div className={tableStyles.DataTable__row} key={index}>
                        <TableCell cellType='th'>{title}</TableCell>
                        <TableCell cellType='td'>
                            {description.map((text, index) => {
                                return (
                                    <span key={index}>{text}</span>
                                )
                            })}
                            {smallInfo?.length > 0 && (
                                <div dangerouslySetInnerHTML={{ __html: smallInfo }} />
                            )}
                        </TableCell>
                    </div>
                )
            })}
        </div>
    )
}

export default DataTable 