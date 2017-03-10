import { connect } from 'react-redux';
import { Search } from '../components/search';
import axios from 'axios';
import { searchAction } from '../actions/search';
import { fetchList } from '../list/actions/fetch-list'


const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchClick: (value) => {
            dispatch(searchAction(value))
            dispatch({ type: 'REQUEST_LIST_START', payload: null })
            dispatch(fetchList(value))
        }
    }
}

const SearchFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchFilter