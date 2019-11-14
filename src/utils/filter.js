export const filterPost = ( pos, category, search ) => {
    let countCat=0;
    let countSearch=0;
    return pos.filter( (post) => {
        let filterCat = post.category.toLowerCase().search(category.toLowerCase()) !== -1;
        let filterSearch = post.title.toLowerCase().search(search.toLowerCase()) !== -1;
        if(filterCat){
            countCat=countCat+1
        }
        if(filterSearch) {
            countSearch=countSearch+1
        }
        if((!category && !search) || (!category && search)){
            return filterSearch
        }else if(category && !search) {
            return  filterCat
        }else if(category && search &&(countCat>countSearch)) {
            return  filterSearch
        }else if(category && search && (countSearch>countCat)) {
            return  filterCat
        }
    });
}