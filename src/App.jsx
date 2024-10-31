import React from "react";
import { ConfigProvider, App as AntApp} from "antd";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import "./index.css"

function App() {
  return (
    <ConfigProvider>
      <AntApp>
        <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader
              ? DefaultComponent
              : React.Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        </BrowserRouter>
      </AntApp>
      </ConfigProvider>
  );
}
export default App;
