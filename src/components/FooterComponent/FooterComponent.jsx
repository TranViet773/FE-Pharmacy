import React from "react";
import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Row gutter={[16, 16]}>
          {/* About Section */}
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold text-primary mb-4">About <strong className="text-blue-500">Pharmative</strong></h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.
            </p>
          </Col>

          {/* Navigation Section */}
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold text-primary mb-4">Navigation</h3>
            <ul className="list-none space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Supplements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Vitamins</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Diet & Nutrition</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Tea & Coffee</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Info</h3>
            <ul className="list-none space-y-2 text-gray-600">
              <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li><a href="tel://23923929210" className="hover:text-primary">+2 392 3929 210</a></li>
              <li><a href="mailto:emailaddress@domain.com" className="hover:text-primary">emailaddress@domain.com</a></li>
            </ul>
          </Col>
        </Row>
        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with <HeartFilled className="text-red-500" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Colorlib</a>
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
