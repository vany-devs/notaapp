import { Link } from "react-router";

function Links({ to, text }) {
    return ( 
        <>
            <Link to={to} className="hover:text-purple-500 dark:hover:text-sky-400 transition-colors"> {text} </Link>
        </>
     );
}

export default Links;