import { PlusOutlined, ReadOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import React from "react";
import { connect } from "react-redux";

const Explore = (props) => {

    const { comics } = props;

    const renderComics = () => {
        return comics.map((c)=>{
            return (
                <Card
                    style={{width: "220px"}}
                    size="small"
                    cover={<img alt="example" src="https://cdnpad.eventbuzz.co.il/a07722e60b1be7bf23d28cf35e592f8d.jpg" />}
                    actions={[
                        <ReadOutlined key="read" />,
                        <PlusOutlined key="add" />,
                    ]}
                >
                    <Card.Meta 
                        title={c.title}
                        description={c.author}
                    />
                </Card>
            )
        })
    }

    return (
        <div>
            <h1>Explore page</h1>
            <p>
                This will have:
                -all comics
                -will be a public page
                -add comics to your library from here 
            </p>
            <div style={{margin: "20px"}} >
                <Space size={[12, 18]} wrap >
                    {comics && renderComics()}
                </Space>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {comics: state.comics.all_comics}
}

export default connect(mapStateToProps)(Explore);