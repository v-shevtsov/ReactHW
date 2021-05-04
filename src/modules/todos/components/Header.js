import {AppBar, Box, Toolbar} from '@material-ui/core';
import TodosFilter from './TodosFilter';

export default function Header({search, setSearch}) {

    return (
        <Box p={1} pl={5}>
            <Toolbar>
                <TodosFilter
                    search={search}
                    setSearch={setSearch}
                />
            </Toolbar>
        </Box>
    );
}