import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@material-ui/core";


export default function CustomRouterLink({children, ...props}) {
    return (
        <Link {...props}>
            <MaterialLink component="button"
                          variant="body2"
                          underline='hover'
                          color='error'
            >
                {children}
            </MaterialLink>
        </Link>
    )
}