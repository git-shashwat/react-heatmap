import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setXLabel, setYLabel, setStartYear, setEndYear, setPestle, setTopic, setMeasure, setRegion } from './actions/filters';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));