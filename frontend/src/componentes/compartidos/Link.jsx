function Links({ url, text }) {
    return ( 
        <>
            <a href={url} className="hover:text-purple-500 dark:hover:text-sky-400 transition-colors"> {text} </a>
        </>
     );
}

export default Links;