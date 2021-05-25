import Breadcrumb from './Breadcrumb'
import SearchBox from './SearchBox'

function Header() {
    return(
        <div className="header">
            <Breadcrumb/>
            <SearchBox/>
        </div>
    )
}

export default Header;