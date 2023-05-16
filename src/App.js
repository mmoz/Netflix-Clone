import { useState,useEffect } from 'react';
import './App.css';
import Content from './Components/Content';
import Faq from './Components/Faq';
import Header from './Components/Header';
import data from './data';
import FooterComponent from "./Components/FooterComponent";


function App() {
  const [content,setContent] = useState(data);
  const [email,setEmail] = useState("");
  const [alert,setAlert] = useState("")
  const [borderinput, setBorderinput] = useState("");

  const validate=(e)=>{
    e.preventDefault();

    if (email.includes("@")) {
      setAlert("");
      setBorderinput("white");
    } else {
      setAlert("ต้องป้อนอีเมล");
      setBorderinput("red");
    }

  }
    useEffect(() => {
      document.title = "Netflix Clone";
    }, []);
  

  return (
    <div className="App">
      <Header />
      <Content />
      <section className="faq">
        <div className="faq-head">
          <h1>คำถามที่พบบ่อย</h1>
        </div>
        {content.map((item, index) => {
          return <Faq key={item.id} {...item} />;
        })}
        <form onSubmit={validate}>
          <div className="footer-faq">
            <div className="foot-faq">
              <label>
                <p>
                  หากพร้อมรับชม
                  ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง
                </p>

                <div className="foot-body">
                  <div className="foot-content">
                    <input
                      type="text"
                      placeholder="ที่อยู่อีเมล"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      style={{ borderColor: borderinput }}
                      required
                    />
                    <button className="btn" type="submit">
                      เริ่มต้น
                    </button>
                    <small>{alert}</small>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </form>
      </section>
      <FooterComponent/>
    </div>
  );
}

export default App;
