import './FooterComponent.css'
const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <span>หากมีคำถามโทร 1-800-018-298</span>
        </div>
        <div className="footer-content">
          <ul>
            <li>คำถามที่พบบ่อย</li>
            <li>ศูนย์สื่อมวลชน</li>
            <li>แลกบัตรของขวัญ</li>
            <li>ข้อกำหนดการใช้งาน</li>
            <li>ข้อมูลบริษัท</li>
            <li>ประกาศแจ้งทางกฎหมาย</li>
            <li>
            <select>
              <option>ไทย</option>
              <option>อังกฤษ</option>
            </select>
            </li>
            <li className ="last">Website นี้ทำขึ้นเพื่อฝึกเท่านั้น</li>
          </ul>
          <ul>
            <li>ศูนย์ช่วยเหลือ</li>
            <li>นักลงทุนสัมพันธ์</li>
            <li>ซื้อบัตรของขวัญ</li>
            <li>ความเป็นส่วนตัว</li>
            <li>ติดต่อเรา</li>
            <li>ที่ Netflix เท่านั้น</li>
          </ul>
          <ul>
            <li>บัญชี</li>
            <li>ตำแหน่งงาน</li>
            <li>วิธีรับชม</li>
            <li>การตั้งค่าคุกกี้</li>
            <li>ทดสอบความเร็ว</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
