import React from 'react'

export const usePagination = (count, contentPerPage) => {
    const [page, setPage] = React.useState(1);
    const [gaps, setGaps] = React.useState({
        before: false,
        paginationGroup: [],
        after: true,
    });
    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;
    const [pagesInBetween, setPagesInBetween] = React.useState([]);

    React.useEffect(() => {
        if (pageCount > 2) {
            const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
            setPagesInBetween(temp);
        }
    }, [pageCount])

    React.useEffect(() => {
        const currentLocation = pagesInBetween.indexOf(page);
        let paginationGroup = [];
        let before = false;
        let after = false;
        if (page === 1) {
            paginationGroup = pagesInBetween.slice(0, 3);
        } else if (
            page === pageCount ||
            page === pageCount - 1 ||
            page === pageCount - 2
        ) {
            paginationGroup = pagesInBetween.slice(-3, pageCount);
        } else if (page === 2) {
            paginationGroup = pagesInBetween.slice(
                currentLocation,
                currentLocation + 3
            );
        } else {
            paginationGroup = [page - 1, page, page + 1];
        }
        if (pageCount <= 5) {
            before = false;
            after = false;
        } else {
            before = false;
            after = false;
            if (paginationGroup[0] > 2) {
                before = true;
            }
            if (paginationGroup[2] < pageCount - 1) {
                after = true;
            }
        }
        setGaps({ paginationGroup, before, after });
    }, [page, pagesInBetween, pageCount]);

    const setPageSAFE = (num) => {
        if (num > pageCount) {
            setPage(pageCount);
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    };
    const totalPages = pageCount;
    return {
        totalPages,
        setPageSAFE,
        firstContentIndex,
        lastContentIndex,
        gaps
    }
}

export default usePagination;