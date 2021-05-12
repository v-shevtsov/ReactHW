import { TableRow, withStyles } from "@material-ui/core";

export const StyledTableRow = withStyles((theme) => ({
    root: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.info.light
        }
    }
}))(TableRow)