import React from 'react'

const FooterSupport = (props) => {
  return <>
    <div className={props.className}>
      <div className="footer-title">Hỗ trợ khách hàng</div>

      <ul className='footer-list-item'>
        <li><a href="" className = "footer-item-link">Hotline: 1900-6035 <br/> (1000 đ/phút, 8-21h kể cả T7, CN)</a></li>
        <li><a href="" className = "footer-item-link">Các câu hỏi thường gặp</a></li>
        <li><a href="" className = "footer-item-link">Gửi yêu cầu hỗ trợ</a></li>
        <li><a href="" className = "footer-item-link">Hướng dẫn đặt hàng</a></li>
        <li><a href="" className = "footer-item-link">Phương thức vận chuyển</a></li>
        <li><a href="" className = "footer-item-link">Chính sách đổi trả</a></li>
        <li><a href="" className = "footer-item-link">Hướng dẫn trả góp</a></li>
        <li><a href="" className = "footer-item-link">Chính sách hàng nhập khẩu</a></li>
        <li><a href="" className = "footer-item-link">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
        <li><a href="" className = "footer-item-link">Báo lỗi bảo mật: security@tiki.vn</a></li>
      </ul>
    </div>
  </>
}

export default FooterSupport