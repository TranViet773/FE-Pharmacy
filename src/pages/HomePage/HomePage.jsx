import React, { useState } from "react";
import { Card, Col, Divider, Row, Pagination, Rate } from 'antd';
import ImageCarousel from "./Casourel";

function HomePage() {
  const [page, setPage] = useState(1); // Trạng thái cho phân trang

  const products = [
    {
      id: 1,
      name: "Sản Phẩm 1",
      thumbnail: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvb9a4kmj4kl3c_tn",
      minPrice: 100,
      rating: 4,
    },
    {
      id: 2,
      name: "Sản Phẩm 2",
      thumbnail: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvb9a4kmj4kl3c_tn",
      minPrice: 100,
      rating: 4,
    },
    {
      id: 3,
      name: "Sản Phẩm 3",
      thumbnail: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvb9a4kmj4kl3c_tn",
      minPrice: 100,
      rating: 4,
    },
    {
      id: 4,
      name: "Sản Phẩm 4",
      thumbnail: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvb9a4kmj4kl3c_tn",
      minPrice: 100,
      rating: 4,
    }
  ];

  const handlePageChange = (page) => {
    setPage(page);
    // Thêm logic nếu bạn muốn tải lại sản phẩm từ API khi chuyển trang
  };

  return (
    <div className="container mx-auto">
      <div>
        <ImageCarousel />
      </div>

      <Divider orientation="left">Danh Mục Sản Phẩm</Divider>
      <Row>
        <Col span={20} offset={2}>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col key={product.id} span={6} xs={24} sm={12} md={8} lg={6}>
                <a href="#">
                  <Card
                    className="w-auto h-72 mx-auto rounded-lg hover:shadow-lg flex flex-col"
                    hoverable
                    bodyStyle={{ padding: "0" }}
                  >
                    <img
                      className="rounded-t-lg w-full h-48 object-cover"
                      src={product.thumbnail}
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="pl-2.5 pt-2.5">
                        <h3 className="text-blue-100">{product.name}</h3>
                        <p>{product.minPrice.toLocaleString()} VND</p>
                        <div>
                          <Rate disabled defaultValue={product.rating} style={{ fontSize: "14px" }} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Pagination onChange={handlePageChange} current={page} total={50} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
