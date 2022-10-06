import React from 'react';

export const useItems = (items, sort, query, type) => {
    const sortedAndSearchedItems = React.useMemo(() => {

        switch (type) {
            case 'equal':
                return items.filter(items => String(items[sort]).toLowerCase() === (query.toLowerCase()))
            case 'consist':
                return items.filter(items => String(items[sort]).toLowerCase().includes(query.toLowerCase()))
            case 'more':
                if (sort === 'distance' || sort === 'quantity') {
                    return items.filter(items => items[sort] > query)
                }
                return []
            case 'less':
                if (sort === 'distance' || sort === 'quantity') {
                    return items.filter(items => items[sort] < query)
                }
                return []
            default:
                return items
        }

    }, [query, sort, type, items])
    return sortedAndSearchedItems;
};