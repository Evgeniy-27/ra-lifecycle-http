import React, { useState } from "react";
import "./Watches.css";
import Clock from "./Clock";
import { nanoid } from "nanoid";

function Watches() {
  const [data, setData] = useState({ name: "", timezone: "" });
  const [formdata, setFormdata] = useState([]);

  const inputChange = (e) => {
    setData((prev) => ({ ...data, [e.target.name]: e.target.value }));
    
  };

  const formSubmit = (evt) => {
    evt.preventDefault();

    if (data.name) {
      setFormdata((prev) => [...formdata, {name: data.name, timezone: data.timezone, id: nanoid(4).toLowerCase()},
      ]);
      setData((prev) => ({ ...data, name: "", timezone: "" }));
    } else return;
  };

  return (
    <div className="App">
      <form className="form-1" onSubmit={formSubmit}>
        <div className="input">
          <span>Название</span>
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={inputChange}
          ></input>
        </div>
        <div className="input">
          <span>Временная зона</span>
          <input
            name="timezone"
            type="text"
            value={data.timezone}
            onChange={inputChange}
            placeholder="+07 or -07"
          ></input>
        </div>
        <button className="button-1" onClick={formSubmit}>Добавить</button>
      </form>
      <Clock data={formdata} changedata={setFormdata} />
    </div>
  );
}

export default Watches;
