import tv from '../image/tv.png'
import netflix2 from '../image/netflix2.png'
import netflix3 from '../image/netflix3.png'
import goat from '../video/goat.mp4'

import  './Content.css'
const Content =()=>{
    return (
      <section className="content">
        <div className="content-container">
          <div className="box">
            <div className="box-item">
              <div className="box-text">
                <div className="box-info">
                  <h1>รับชมได้ในทีวี</h1>
                  <p>
                    รับชมได้ในสมาร์ททีวี Playstation,Xbox,
                    <br />
                    Chromecast, Apple TV เครื่องเล่น Blu-ray และอีก มากมาย
                  </p>
                </div>

                <div className="image">
                  <img src={tv} alt="tv"></img>
                  {/* <video src={goat} controls /> */}
                </div>
              </div>
            </div>
            <div className="box-item2">
              <div className="box-text2">
                <div className="image2">
                  <img src={netflix2} alt="tv"></img>
                </div>
                <div className="box-info2">
                  <h1>ดาวน์โหลดเนื้อหาไว้รับชมออฟไลน์</h1>
                  <p>
                    บันทึกเนื้อหาโปรดได้ง่ายๆ
                    และมีความบันเทิงพร้อมให้รับชมอยู่เสมอ
                  </p>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="box-text">
                <div className="box-info">
                  <h1>รับชมได้ทุกที่</h1>
                  <p>
                    สตรีมภาพยนตร์และรายการทีวีได้ไม่
                    <br />
                    จำกัดในโทรศัพท์ แท็บเล็ต แล็ปท็อป
                    <br /> และทีวี มากมาย
                  </p>
                </div>
                <div className="image">{/* <img src={kuyjame}></img> */}</div>
              </div>
            </div>
            <div className="box-item2">
              <div className="box-text2">
                <div className="image2">
                  <img src={netflix3} alt="tv"></img>
                </div>
                <div className="box-info2">
                  <h1>สร้างโปรไฟล์สำหรับเด็ก</h1>
                  <p>
                    เปิดโลกแห่งการผจญภัยให้บุตรหลานด้วยตัวละคร
                    <br />
                    โปรดในโปรไฟล์มุมเด็กที่คุณจะใช้งานได้ฟรีเมื่อสมัคร
                    <br />
                    สมาชิก
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Content