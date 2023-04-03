import React from "react";
import Logo from "../../assets/img/AoT-gold 3.png";
import img1 from "../../assets/img/Home/img1.png";
import img2 from "../../assets/img/Home/img2.png";
import img3 from "../../assets/img/Home/img3.png";
import img4 from "../../assets/img/Home/img4.png";
import img5 from "../../assets/img/Home/img5.png";
import video from "../../assets/video/FASHION DEMOmp4.mp4";
export default function Home(props) {
  return (
    <div className="container-1">
      <div className="carousel">
        <img src={Logo} alt="logo" />
      </div>

      <div className="video">
        <video auto src={video}></video>
      </div>

      <div className="category">
        <h2>SẢN PHẨM</h2>
        <p>
          Thương hiệu ART OF TECHNOLOGY được hình thành trong giai đoạn công
          nghệ số. Là một doanh nghiệp trẻ với sứ mệnh, mong muốn thay đổi và
          cập nhật các xu hướng công nghệ cho các đối tượng khách hàng trên khắp
          cả nước. ART OF TECHNOLOGY lấy con người là trung tâm của mọi sự thay
          đổi và phát triển. Chúng tôi tin rằng ART OF TECHNOLOGY sẽ mang đến
          những trải nghiệm mới và đạt được những thành công trong tương lai.
        </p>
      </div>

      <div className="quytrinh">
        <div className="1">
          <img src={img1} alt="1" />
        </div>
        <div className="text-2">
          <h2>PHẦN MỀM Quản lý điều hành tác nghiệp</h2>
          <p>
            Phần mềm Quản lý điều hành tác nghiệp cung cấp giải pháp tổng thể
            cho phép Các Bộ/ngành, các Tỉnh/thành phố, các cơ quan quản lý nhà
            nước có thể quản lý, điều hành toàn bộ các hoạt động nội bộ tại cơ
            quan. Phần mềm đáp ứng đầy đủ các quy trình nghiệp vụ, phục vụ tốt
            nhất công tác quản lý cán bộ tại các cơ quan tổ chức.
          </p>
          <button>
            <p>XEM TIẾP</p>
            <i class="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="text-3">
          <h2>Phần mềm Quản lý lưu trữ tài liệU</h2>
          <p>
            Phần mềm Quản lý lưu trữ tài liệu cho phép các cơ quan/tổ chức tạo
            ra một môi trường quản lý tài liệu tập trung, thống nhất để người sử
            dụng dễ dàng thực hiện các công việc liên quan đến vòng đời của một
            tài liệu (tạo, sửa chữa, phê duyệt, phát hành, lưu trữ, huỷ). Sử
            dụng phần mềm Quản lý lưu trữ tài liệu sẽ giúp cho các cơ quan/đơn
            vị quản lý, lưu trữ, tìm kiếm và xử lý hồ sơ/tài liệu sẽ trở nên đơn
            giản, khoa học, chuyên nghiệp và dễ dàng tìm kiếm hơn cho cán bộ lưu
            trữ. Đây là giải pháp nhằm số hoá tổng thể hoạt động quản lý lưu trữ
            của một cơ quan/ đơn vị. Phần mềm gồm nhiều phân hệ tương ứng với
            các nhóm nghiệp vụ của một cơ quan thực hiện quản lý lưu trữ
          </p>
          <button>
            <p>XEM TIẾP</p>
            <i class="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="4">
          <img src={img2} alt="2" />
        </div>

        <div className="5">
          <img src={img3} alt="3" />
        </div>
        <div className="text-6">
          <h2>Cổng thông tin điện tử</h2>
          <p>
            Giải pháp cổng thông tin điện tử (portal) được xây dựng đặc biệt
            dành cho các Bộ, Sở ban ngành, UBND các tỉnh, các tổng công ty có
            nhu cầu trang bị và phát triển một hệ thống thông tin điện tử trên
            môi trường web nhằm cung cấp thông tin, thực hiện các dịch vụ trực
            tuyến, sử dụng Internet như một công cụ thiết yếu trong các hoạt
            động, cung cấp thông tin, giao tiếp, quản lý và điều hành tác
            nghiệp. Giải pháp cổng thông tin điện tử là nền tảng để xây dựng mới
            các dịch vụ trực tuyến. Tất cả các hoạt động dịch vụ của đơn vị sử
            dụng đều phải thông qua portal như: Các dịch vụ trực tuyến qua mạng,
            giao tiếp với người sử dụng, giao tiếp với doanh nghiệp, giao tiếp
            với các cơ quan, tổ chức khác
          </p>
          <button>
            <p>XEM TIẾP</p>
            <i class="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="text-7">
          <h2>Ứng dụng công nghệ VR</h2>
          <p>
            Khác hẳn với những website thông thường chỉ render ra các nội dung
            phẳng (2D), website VR ứng dụng công nghệ 3D và thực tế ảo vào trong
            thiết kế website. Thay vì sử dụng những nội dung với các loại hình
            ảnh, video được xếp chồng trên cùng một mặt phẳng, website VR sẽ cho
            phép nhà thiết kế đặt các đối tượng vào trong một không gian 3D hoàn
            toàn, theo đó người dùng trải nghiệm sự vật ở không gian 3D, có thể
            dễ dàng tương tác, xoay, lật để quan sát chi tiết các sản phẩm với
            bất kỳ góc độ nào, WebVR cũng dễ dàng thêm vào một người thuyết minh
            ảo, khiến cho người xem như đang thực sự được khám phá các sản phẩm
            ngay tại Showroom bán hàng với các cơ quan, tổ chức khác
          </p>
          <button>
            <p>XEM TIẾP</p>
            <i class="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="8">
          <img src={img4} alt="4" />
        </div>

        <div className="9">
          <img src={img5} alt="5" />
        </div>
        <div className="text-10">
          <h2>Ứng dụng công nghệ AR</h2>
          <p>
            Công nghệ Thực tế ảo tăng cường (Augmented Reality – AR) là một xu
            hướng công nghệ mới được phát triển trên nền tảng công nghệ thực tế
            ảo (Virtual Reality). Hiện nay, công nghệ này đã trở nên cực kỳ phổ
            biến vì chúng có mặt trên tất cả các thiết bị điện tử, đặc biệt là
            smartphone – “vật bất ly thân” của con người thời 4.0. So với công
            nghệ thực tế ảo, thực tế ảo tăng cường hỗ trợ thêm thành phần kỹ
            thuật số tương tác. Vì vậy, bạn có thể kích hoạt camera trên
            smartphone, xem thế giới thực xung quanh trên màn hình và tương tác
            với vật thể 3D thông qua lớp phủ kỹ thuật số. Công nghệ này cho phép
            những sự vật/hiện tượng mô phỏng theo dạng 3D xuất hiện trong môi
            trường thật, không gian thật qua màn hình máy tính hoặc điện thoại,
            âm thanh, đồ họa, video, v.v nhằm mang đến cảm giác chân thật và
            sinh động cho người dùng.{" "}
          </p>
          <button>
            <p>XEM TIẾP</p>
            <i class="fa fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>



      <div className="info">
        
      </div>
      <div className="event"></div>
      <div className="partner"></div>

      <div className="footer">
        <div className="footer-template">
          <div className="footer-left">
            <div className="name">
              <h1>CÔNG TY ART OF TECHNOLOGY</h1>
              <h2>© Bản quyền Art of Technology</h2>
            </div>
            <div className="social">
              <h2>Kết nối với chúng tôi:</h2>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-logo">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
