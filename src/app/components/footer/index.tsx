import React from "react";

export default function Footer() {
  return (
    <div className={"foot-config"}>
      <div className={"mainFooter"}>
        <div className={"footinfo"}>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#A4A4A4" }}>
            <b style={{ fontSize: "16px", fontWeight: 600, color: "#2F96FD" }}>
              서비스
            </b>{" "}
            <br /> 특징
            <br /> 가격
            <br /> 블로그
          </span>
        </div>
        <div className={"footinfo"}>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#A4A4A4" }}>
            <b style={{ fontSize: "16px", fontWeight: 600, color: "#2F96FD" }}>
              회사
            </b>{" "}
            <br /> 소개
            <br /> 프로그램
            <br /> 문의
          </span>
        </div>
        <div className={"footinfo"}>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#A4A4A4" }}>
            <b style={{ fontSize: "16px", fontWeight: 600, color: "#2F96FD" }}>
              지원
            </b>{" "}
            <br /> 개인정보
            <br /> 이용약관
            <br /> 쿠키
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
