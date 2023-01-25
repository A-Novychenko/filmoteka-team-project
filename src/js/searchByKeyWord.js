import { headerForm, errorSearch } from './refs';
import ApiService from './apiService'; 

const apiService = new ApiService();

headerForm.addEventListener('submit', onHeaderFormClick);

async function onHeaderFormClick(evt) {
    try {
        evt.preventDefault();
        apiService.query = evt.currentTarget.elements.keyword.value;
        page = 1;
        if (!apiService.query.trim()) {
            return;
        }
        const response = await apiService.fetchFilmsByKeyWord();
        errorSearch.hidden = true;
        headerForm.reset();
       
        if (response.data.results.length === 0) {
            errorSearch.hidden = false;
            headerForm.reset();
        }
       
    } catch (err) {
        console.log(err)
    }
}