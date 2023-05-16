import './Header.css'
import {useState} from 'react'
const Header=()=>{
  const [email,setEmail] = useState("")
  const [errormsg,setErrormsg] = useState("")
  const [borderinput,setBorderinput] = useState("white");

  const validateForm = (e) => {
    e.preventDefault();
      if (email.includes("@")) {
        setErrormsg("");
        setBorderinput("grey")

      } else {
        setErrormsg("ต้องป้อนอีเมล");
        setBorderinput("red")
      }

  };
    return (
      <header>
        <nav>
          <div className="logo">
            <h1>NETFLIX</h1>
          </div>
          <div className="menu-btn">
            <select className="selected">
              <option>ภาษาไทย</option>
              <option>English</option>
            </select>
            <button>เข้าสู่ระบบ</button>
          </div>
        </nav>
        <form className="form" onSubmit={validateForm}>
          <div className="textbox">
            <div className="text">
              <h1>ภาพยนตร์รายการทีวีและความบันเทิงอีกมากมายแบบไม่จำกัด</h1>
              <p>รับชมได้ทุกที่ยกเลิกได้ทุกเมื่อ</p>
            </div>
            <div className="start">
              <label>
                <p>
                  หากพร้อมรับชมป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง
                </p>
                <div className="info">
                  <input
                    type="text"
                    placeholder="ที่อยู่อีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: borderinput }}
                    required
                  />
                  <button className="btn-start" type="submit">
                    เริ่มต้นใช้งาน {`>`}
                  </button>
                  <small>{errormsg}</small>
                </div>
              </label>
            </div>
          </div>
        </form>
      </header>
    );
}
export default Header