import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from 'popper.js';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const html = (
    <div className="container-fluid">
    <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#nav">File-upload</a>
  </nav>
  <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Catgeory</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  <App  />
  </div>
  </div>
);
ReactDOM.render(html, document.getElementById("root"));
