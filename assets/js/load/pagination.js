var makePagination = (table,pager) => {
    $('#'+table).pageMe({
        pagerSelector:'#'+pager,
        activeColor: 'blue',
        prevText:'Anterior',
        nextText:'Siguiente',
        showPrevNext:true,
        hidePageNumbers:false,
        perPage:8
    })
}