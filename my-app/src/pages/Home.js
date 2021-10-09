import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const Home = () => {
    const history = useHistory();
    const [basePath, setBasePath] = useState("");
    const location = useLocation(); 

    useEffect(() => {
        setBasePath(location.pathname.split("/").slice(0, -1).join("/"));
    }, [location]);

    return(
        <div className="App">
            <p style={{fontSize: "20px"}}>
                Home
            </p>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
            <a
            className="App-link"
            onClick={() => {
                history.push({
                    pathname: basePath + "/list",
                });
            }}
            >
                Go to list
            </a>
        </div>
    )
}

export default Home;