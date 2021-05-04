import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {changeFilter} from '../store/actions/actions';

function TodosFilter({filter, dispatch, search, setSearch}) {
    function onChange(e) {
        dispatch(changeFilter(e.target.value));
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <FormControl variant="outlined">
                <InputLabel id="select-filter">Filter</InputLabel>
                <Select
                    labelId="select-filter"
                    value={filter}
                    onChange={onChange}
                    label="Filter"
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="done">Done</MenuItem>
                    <MenuItem value="notdone">Not Done</MenuItem>
                </Select>
            </FormControl>
            <TextField type="text" value={search} onChange={onSearchChange} label="Search" variant="outlined" />
        </>
    );
}

function mapStateToProps(state) {
    return {filter: state.filter};
}

export default connect(mapStateToProps)(TodosFilter);