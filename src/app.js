import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setDataBase } from './actions/pointers';
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

fetch("/data")
  .then(res => res.json())
  .then(data => {
    store.dispatch(setDataBase(data));
    ReactDOM.render(jsx, document.getElementById('app'));
  });