import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
const HomeTemplate = () => {
  const arrNavLink = [
    {
      to: "/",
      content: "home",
    },
    {
      to: "/bai-tap-pokemon",
      content: "Pokemon Lists",
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
        {arrNavLink.map((item, index) => {
          return (
            <NavLink
              className={(isActive) => {
                console.log(isActive);
                return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
              }}
              to={item.to}
              key={index}
            >
              {item.content}
            </NavLink>
          );
        })}
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