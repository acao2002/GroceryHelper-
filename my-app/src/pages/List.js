import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './List.css';

const List = () => {
    const history = useHistory();
    const [basePath, setBasePath] = useState("");
    const location = useLocation(); 

    useEffect(() => {
        setBasePath(location.pathname.split("/").slice(0, -1).join("/"));
    }, [location]);

    return(

        <div className="App">
            <div class="parallax">

            </div>

            <header className="App-header">
                <p>
                    Hi Guys
                </p>
            </header>
        </div>
    )
}

export default List;