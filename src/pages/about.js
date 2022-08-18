import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import './css/button.css'
import Seo from "../components/seo"

export const Head = () => <Seo title="เกี่ยวกับเรา" />
const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <div className="container  my-5">
    <div className="container">
        <h1>คณะผู้จัดทำ</h1>
        <p>
          <ul>
            {/* 1 */}
            <li> <b>ชื่อ-สกุล: </b> นาย พงศกร ธีระกุล</li> 
                 <b>รหัสนักศึกษา: </b> 6210110211
            {/* 2 */}
            <li> <b>ชื่อ-สกุล: </b> นาย พลทัศน์ กฐินทิพย์</li> 
                 <b>รหัสนักศึกษา: </b> 6210110224
            {/* 3 */}
            <li> <b>ชื่อ-สกุล: </b> นาย ติณณภพ แซ่จุ้ง</li>
                 <b>รหัสนักศึกษา: </b> 6210110484
            {/* 4 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว ทิวาพร บุญเกื้อ</li>    
                 <b>รหัสนักศึกษา: </b> 6210110489
            {/* 5 */}
            <li> <b>ชื่อ-สกุล: </b> นางสาว สิรินทรา พุ่มนุ่ม</li> 
                 <b>รหัสนักศึกษา: </b> 6210110599
          </ul>
        </p>
    </div>
    <Link to="/">หน้าแรก</Link>
    </div>
  </Layout>
)


export default AboutPage