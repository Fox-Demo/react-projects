import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";
import Tab from "./Tab";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [tab, setTab] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTabs = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTabs(result);
      setTab(result[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filterTab = (company) => {
    let targetTab = tabs.filter((item) => item.company == company);
    setTab(targetTab[0]);
  };

  useEffect(() => {
    getTabs(url);
  }, []);

  return (
    <div className="tabs">
      <header className="tabs__header">
        <h1 className="tabs__header--title">
          {isLoading ? "Loading" : "Experience"}
        </h1>
        <hr className="tabs__header--underline" />
      </header>
      <main className="tabs__main">
        <aside className="tabs__aside">
          <button
            onClick={() => filterTab("TOMMY")}
            className="tabs__aside--list"
            autoFocus
          >
            tommy
          </button>
          <button
            value={"BIGDROP"}
            onClick={() => filterTab("BIGDROP")}
            className="tabs__aside--list"
          >
            bigdrop
          </button>
          <button
            onClick={() => filterTab("CUKER")}
            className="tabs__aside--list"
          >
            cuker
          </button>
        </aside>

        {isLoading === false && <Tab {...tab} />}
      </main>
      <button type="button" className="info__button">
        more info
      </button>
    </div>
  );
};

export default Tabs;
