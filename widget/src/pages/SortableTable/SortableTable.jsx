import React from 'react';
import { useItems } from '../../hooks/useItems';
import { usePagination } from '../../hooks/usePagination';
import BodyRow from '../../components/BodyRow/BodyRow';
import HeadCellSort from '../../components/HeadCellSort/HeadCellSort';
import SortMenu from '../../components/SortMenu/SortMenu';
import PaginationBox from '../../components/PaginationBox/PaginationBox';
import './SortableTable.css';

function SortableTable() {
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState({ sort: '', type: '', query: '', });
    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query, filter.type);
    const count = items.length;
    const contentPerPage = 10;
    const { gaps, lastContentIndex, firstContentIndex, totalPages, setPageSAFE } = usePagination(count, contentPerPage)

    React.useEffect(() => {
        fetch('http://localhost:8080/table/logistic/')
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    return (
        <div>
            <SortMenu
                filter={filter}
                setFilter={setFilter}
            />
            <table className='table'>
                <thead className='table_head'>
                    <tr className='table_column'>
                        <HeadCellSort>№</HeadCellSort>
                        <HeadCellSort>Дата</HeadCellSort>
                        <HeadCellSort>Название</HeadCellSort>
                        <HeadCellSort>Количество</HeadCellSort>
                        <HeadCellSort>Расстояние</HeadCellSort>
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {sortedAndSearchedItems
                        .slice(firstContentIndex, lastContentIndex)
                        .map((elem, ind) => (
                            <BodyRow key={ind}>
                                <td className='body_cell'>{ind + 1}</td>
                                <td className='body_cell'>{new Date(elem?.date).toISOString().split('T')[0]}</td>
                                <td className='body_cell'>{elem?.name}</td>
                                <td className='body_cell'>{elem?.quantity} шт</td>
                                <td className='body_cell'>{elem?.distance} км</td>
                            </BodyRow>
                        ))}
                </tbody>
            </table>
            {sortedAndSearchedItems.length === 0 && 'Нет данных по соответствующему запросу'}
            <PaginationBox
                totalPages={totalPages}
                setPage={setPageSAFE}
                gaps={gaps}
            />
        </div>
    )
}

export default SortableTable