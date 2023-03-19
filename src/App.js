import React, { useEffect, useState } from "react";
import "./App.css";
import CountryPage from "./components/CountryPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import { ThemeProvider } from "./components/Theme";
import Header from "./components/Header";

const API_URL = 'https://restcountries.com/v3.1/all';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [theme, setTheme] = useState({});

  async function getData() {
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }

  useEffect(() => {
    
    getData();

    const body = document.querySelector('body');
    const modeSwitch = document.querySelector('.mode-switch span');
    if(localStorage.getItem('theme') === 'light'){
      setTheme('light');
      localStorage.setItem('theme','light');
      body.style.backgroundColor = 'var(--clr-lightgrey)';
      modeSwitch.textContent = 'Dark Mode';
    }else if(localStorage.getItem('theme') === 'dark'){
      setTheme('dark');
      localStorage.setItem('theme','dark');
      body.style.backgroundColor = 'var(--clr-vdarkblue)';
      modeSwitch.textContent = 'Light Mode';
    } else {
      localStorage.setItem('theme','light');
      setTheme('light');
    }
  }, []);

  function switchTheme() {
    const body = document.querySelector('body');
    const modeSwitch = document.querySelector('.mode-switch span');
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('theme','dark');
      body.style.backgroundColor = 'var(--clr-vdarkblue)';
      modeSwitch.textContent = 'Light Mode';
    }else{
      setTheme('light');
      localStorage.setItem('theme','light');
      body.style.backgroundColor = 'var(--clr-lightgrey)';
      modeSwitch.textContent = 'Dark Mode';
    }
  }

  return (
    <ThemeProvider value={theme}>
      <Header switchTheme={switchTheme}/>
      <Routes>
        <Route path="/" element={<MainPage regionFilter={regionFilter} setRegionFilter={setRegionFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} countries={countries} />} />
        <Route
          path="/details/:id"
          element={<CountryPage countries={countries} />}
          />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
