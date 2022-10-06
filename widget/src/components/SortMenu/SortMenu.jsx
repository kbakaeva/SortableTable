import React from 'react';
import SortSVG from '../../assets/icons/sortIcon.svg';
import MyInput from '../Input/MyInput';
import Select from '../Select/Select';
import './SortMenu.css';

function SortMenu({ filter, setFilter }) {
    const [isShow, setIsShow] = React.useState(false);

    return (
        <div className='sort_wrapper'>
            <button
                onClick={() => { setIsShow(!isShow) }}
                className='sort_button'>
                Сортировка
                <img src={SortSVG} alt='sort' />
            </button>
            <div>
                {isShow && <form>
                    <Select
                        value={filter.sort}
                        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                        defaultValue="Выбор колонки"
                        options={[
                            { value: 'name', name: 'Название' },
                            { value: 'quantity', name: 'Количество' },
                            { value: 'distance', name: 'Расстояние' },
                        ]}
                    />
                    <Select
                        value={filter.type}
                        onChange={selectedSort => setFilter({ ...filter, type: selectedSort })}
                        defaultValue="Выбор сортировки"
                        options={[
                            { value: 'equal', name: 'Равно' },
                            { value: 'consist', name: 'Содержит' },
                            { value: 'more', name: 'Больше' },
                            { value: 'less', name: 'Меньше' },
                        ]}
                    />
                    <MyInput
                        value={filter.query}
                        onChange={e => setFilter({ ...filter, query: e.target.value })}
                        placeholder="Поиск..." />
                </form>}
            </div>
        </div>
    )
}

export default SortMenu