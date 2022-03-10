import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Menu } from "antd";
import { AppstoreOutlined, BookOutlined, EllipsisOutlined, GlobalOutlined, InsertRowAboveOutlined, LoginOutlined, LogoutOutlined, ReadOutlined, SettingOutlined, ShopOutlined, SlidersOutlined, UserOutlined } from "@ant-design/icons";

const NavBar = () => {

    const { authenticated, handleLogout } = useContext(AuthContext);
    const [current, setCurrent] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(location.pathname);
        setCurrent(location.pathname);
    }, []);

    const handleClick = (e) => {
        console.log("click", e);
        if (e.key === "logout") {
            handleLogout(navigate);
            setCurrent("/login");
            return
        }
        setCurrent(e.key);
        navigate(e.key);
    }

    return (
        <div style={styles.container} > 
            {/* <Link to="/" style={styles.link} >Home</Link>
            <Link to="/public" style={styles.link} >Public</Link>
            {authenticated && <Link to="/protected" style={styles.link} >Protected</Link>}
            {authenticated && <Link to="/cont_test" style={styles.link} >Test All</Link>} */}
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
                {authenticated && <><Menu.Item key="/" icon={<InsertRowAboveOutlined/>} >
                    Home
                </Menu.Item>
                <Menu.Item key="/publications" icon={<BookOutlined/>} >
                    Publications
                </Menu.Item>
                <Menu.Item key="/library" icon={<ReadOutlined/>} >
                    My Library
                </Menu.Item></>}
                <Menu.Item key="/explore" icon={<GlobalOutlined/>} >
                    Explore
                </Menu.Item>
                <Menu.Item key="/store" icon={<ShopOutlined/>} >
                    Store
                </Menu.Item>
                {!authenticated && <Menu.Item key="/login" icon={<LoginOutlined/>} >
                    Login
                </Menu.Item>}
                {authenticated && <Menu.SubMenu key="SubMenu" title="Settings" icon={<SettingOutlined/>} >
                    <Menu.Item key="/profile" icon={<EllipsisOutlined/>} >
                        Profile
                    </Menu.Item>
                    <Menu.Item key="logout" icon={<LogoutOutlined/>} >
                        Logout
                    </Menu.Item>
                </Menu.SubMenu>}
            </Menu>
        </div>
    );
};

const styles = {
    container: {
        margin: "0px",
        padding: "10px",
        textAlign: "center",
        // backgroundColor: "black",
    },
    link: {
        textDecoration: "none",
        margin: "10px",
        color: "white",
    }
}

export default NavBar;