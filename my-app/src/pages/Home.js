import { useEffect, useState } from "react";
import { Row, Col, Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import _ from "lodash";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import "../App.css";
import React from 'react';
import ImageUploading from 'react-images-uploading';
import './List.css';
import { Image } from 'antd';

const Home = () => {
    const [list, setList] =  useState([]);
    const colorScheme = ["#50abd3", "#4873a6", "#595386", "#534365"];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };  

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    useEffect(() => {
        const getRecords = async () => {
            axios.get("http://localhost:8080/")
            .then(response => {
                setList(response.data);
            })
            .catch(error => console.log('error', error));
        };
        getRecords();
    }, []);

    return(
        <div className="App" style={{backgroundColor: "#B1CAD6"}}>
            <div class="parallax">
            </div>
            <header className="App-header">
                <div style={{fontWeight: "500"}}>
                    {_.map(list, (items, index) => {
                        return(
                            <Row key={index} 
                            style={{
                                fontSize: "20px",
                                color: "#ffffff",
                                backgroundColor: colorScheme[index%4],
                                padding: "15px",
                                boxShadow: "0px 15px 10px -15px rgba(108, 116, 143, 0.8)",
                            }}>
                                <Col span={12}>{items.item}</Col>
                                <Col span={12}
                                >{items.expire} days left{items.expire < 3? "!!!": ""}</Col>
                            </Row>
                        );
                    })}
                </div>
                <Modal title="Upload an image of your groceries" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <Button
                            type="primary" shape="round" icon={<UploadOutlined />} size={"large"}
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                                Upload
                            </Button>
                            &nbsp;
                            <Button type="danger" onClick={onImageRemoveAll} shape="round">Remove all images</Button>
                            {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <Image  style={{marginTop: "10px"}} src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                <Button shape="round" style={{marginBlock: "10px", marginRight: "10px"}} onClick={() => onImageUpdate(index)}>Update</Button>
                                <Button shape="round" style={{marginBlock: "10px"}} onClick={() => onImageRemove(index)}>Remove</Button>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </ImageUploading>
                </Modal>
            </header>
            <Button 
                type="primary" 
                shape="circle"  
                icon={<PlusOutlined/>} 
                size="large" 
                onClick={showModal}
                style={{
                    backgroundColor: "#66B3FF",
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    border: "0px",
                }}
            />
        </div>
    )
}

export default Home;