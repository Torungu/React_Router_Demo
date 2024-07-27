import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
const HomeTemplate = () => {
  const { hoTen } = useSelector((state) => state.userSlice);
  const arrNavLink = [
    {
      to: "/",
      content: "home",
    },
    {
      to: "/bai-tap-pokemon",
      content: "Pokemon Lists",
    },
    {
      to: "/demo-redux",
      content: "Demo Redux",
    },
    {
      to: "/dices",
      content: "Dices",
    },
    {
      to: "/demoUseEffect",
      content: "useEffect",
    },
    {
      to: "/demo-form-react",
      content: "demoFormReact",
    },
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <div>
          {arrNavLink.map((item, index) => {
            return (
              <NavLink
                className={(isActive) => {
                  // console.log(isActive);
                  return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
                }}
                to={item.to}
                key={index}
              >
                {item.content}
              </NavLink>
            );
          })}
        </div>
        <div className="text-white uppercase ">{hoTen}</div>

        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
