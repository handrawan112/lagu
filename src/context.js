import {createContext} from "react";

require("dotenv").config();

export let urlContext=createContext(process.env.REACT_APP_BASEURL);

export let apiContext=createContext(process.env.REACT_APP_API_KEY_YOUTUBE);

export let listLaguContext=createContext({});

export let historyContext=createContext({});

export let bookmarkContext=createContext({});

export let updateContext=createContext(undefined);

export let storeContext=createContext(undefined);
