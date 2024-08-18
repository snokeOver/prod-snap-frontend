import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const siteName = "MobileSnap";
  const siteLogo = "/icon.png";
  const [pageLoading, setPageLoading] = useState(false);
  const [gBtnLoading, setGBtnLoading] = useState(false);
  const [gitBtnLoading, setGitBtnLoading] = useState(false);
  const [actnBtnLoading, setActnBtnLoading] = useState(false);
  const mobileCategories = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Sony",
    "Xiaomi",
    "Oppo",
    "Huawei",
    "Vivo",
    "Realme",
  ];

  const [toggle, setToggle] = useState(false);

  const defaultTheme = "dark";

  const [currTheme, setCurrTheme] = useState(defaultTheme);
  const [toastMsg, setToastMsg] = useState("");

  const authItems = {
    siteName,
    siteLogo,
    pageLoading,
    setPageLoading,
    gBtnLoading,
    setGBtnLoading,
    gitBtnLoading,
    setGitBtnLoading,
    actnBtnLoading,
    setActnBtnLoading,
    toggle,
    setToggle,
    currTheme,
    setCurrTheme,
    toastMsg,
    setToastMsg,
    mobileCategories,
  };
  return (
    <DataContext.Provider value={authItems}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
