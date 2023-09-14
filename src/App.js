import { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [subject, setSubject] = useState("");
  const [graduation, setGraduation] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [started, setStarted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsReadOnly(true);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setIsReadOnly(false);
  };

  return (
    <div className="bg-slate-500">
      <form onSubmit={handleSubmit}>
        <div id="general">
          <InputField
            name="name"
            type="text"
            value={name}
            state={isReadOnly}
            set={setName}
          />
          <InputField
            name="email"
            type="text"
            value={email}
            state={isReadOnly}
            set={setEmail}
          />
          <InputField
            name="phone"
            type="text"
            value={phone}
            state={isReadOnly}
            set={setPhone}
          />
        </div>
        <br></br>
        <div id="education" className="bg-slate-400">
          <InputField
            name="school"
            type="text"
            value={school}
            state={isReadOnly}
            set={setSchool}
          />
          <InputField
            name="subject"
            type="text"
            value={subject}
            state={isReadOnly}
            set={setSubject}
          />
          <InputField
            name="graduation"
            type="date"
            value={graduation}
            state={isReadOnly}
            set={setGraduation}
          />
        </div>
        <div id="practical">
          <InputField
            name="company"
            type="text"
            value={company}
            state={isReadOnly}
            set={setCompany}
          />
          <InputField
            name="position"
            type="text"
            value={position}
            state={isReadOnly}
            set={setPosition}
          />
          <InputField
            name="responsibilities"
            type="text"
            value={responsibilities}
            state={isReadOnly}
            set={setResponsibilities}
          />
          <InputField
            name="started"
            type="date"
            value={started}
            state={isReadOnly}
            set={setStarted}
          />
        </div>
        <button onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
