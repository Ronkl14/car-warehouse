import "./App.css";
import { ConfigProvider } from "antd";
import CarDashboard from "./Components/Cars/CarDashboard";
import AppRoutes from "./routes/AppRoutes";

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
      <AppRoutes/>
    </ConfigProvider>
  );
}

export default App;
