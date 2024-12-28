import './searchForm.scss';
import arrow from '../../assets/Arrow.png'

const SearchForm = () => {
    return (
        <form action="">
            <div className="search_wrapper">
                <input type="search" className='search' placeholder='Search here' />
            </div>
        </form>
    )
}

export default SearchForm;