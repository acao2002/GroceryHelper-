import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const List = () => {
    const history = useHistory();
    const [basePath, setBasePath] = useState("");
    const location = useLocation(); 

    useEffect(() => {
        setBasePath(location.pathname.split("/").slice(0, -1).join("/"));
    }, [location]);

    return(
        <div className="App">
            <header className="App-header">
                <p>
                    List
                </p>
                <a
                className="App-link"
                onClick={() => {
                    history.push({
                        pathname: basePath + "/home",
                    });
                }}
                >
                    Go to Home
                </a>
            </header>
        </div>
    )
}

export default List;