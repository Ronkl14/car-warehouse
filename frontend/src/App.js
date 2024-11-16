import "./App.css";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const customTheme = {
  token: {
    // colorPrimary: "#28b302",
    colorTextBase: "black",
    borderRadius: "6px",
    fontFamily: "'Secular One', sans-serif",
    // colorLink: "#28b302",
    // colorLinkHover: "#28b302",
    // colorLinkSelected: "#28b302",
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
