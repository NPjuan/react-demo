import React, { useState, useEffect, useMemo, useRef } from "react";
import "./index.css";
import browserURL from "./image/chrome.svg";
import hulkdataURL from "./image/hulkdata.png";
import daoURL from "./image/dao.svg";

import Wrapper from "../wrapper";
import Site from "../site";
import Pipeline from "../pipeline";
import DetailList from "../detailList";
import Block from "../block";
export default function Daigram() {
  const browserRef = useRef();
  const leftPipelineRef = useRef();
  const rightPipelineRef = useRef();
  const hulkdataRef = useRef();
  const daoRef = useRef();
  const refs = [
    browserRef,
    leftPipelineRef,
    hulkdataRef,
    rightPipelineRef,
    daoRef,
  ];
  const animateFunc = [
    siteFunc,
    pipelineFunc,
    hulkdataFunc,
    pipelineFunc,
    siteFunc,
  ];

  const [leftOpacity, setLeftOpacity] = useState(0);
  const [rightOpacity, setRightOpacity] = useState(0);
  const [lastOpacity, setlastOpacity] = useState(0);
  const [lastListOpacity, setlastListOpacity] = useState(0);
  console.log("lastOpacity", lastOpacity);
  function siteFunc(node) {
    node.style.opacity = 1;
  }
  function hulkdataFunc(node) {
    node.style.top = "50%";
    node.style.opacity = 1;
  }
  function pipelineFunc(node) {
    node.style.opacity = 1;
    node.style.width = "22rem";
  }
  useEffect(() => {
    for (let i = 0; i < refs.length; i++) {
      setTimeout(() => {
        const { current } = refs[i];
        animateFunc[i](current);
      }, i * 500);
    }
    return () => {};
  }, []);
  return (
    <div className="wrapper">
      <main>
        <Wrapper
          ref={browserRef}
          left="2%"
          width="10rem"
          yCenter
          pointer
          children={<Site imgUrl={browserURL} desc={"Browser"} />}
        />
        <Wrapper
          ref={leftPipelineRef}
          left="10%"
          width="1.6rem"
          pointer
          yCenter
          children={
            <Pipeline desc={"外网"} listDesc={["门神防护", "网关限频"]} />
          }
        />
        <Wrapper xCenter yCenter ref={hulkdataRef}>
          <img width="100%" src={hulkdataURL} alt="hulkdata" />
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "30%",
              height: "100%",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              setLeftOpacity(1);
            }}
            onMouseLeave={() => {
              setLeftOpacity(0);
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "35%",
              top: "0",
              width: "30%",
              height: "100%",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              setRightOpacity(1);
              setlastOpacity(1);
            }}
            onMouseLeave={() => {
              setRightOpacity(0);
              setlastOpacity(0);
            }}
          ></div>
          <Wrapper
            left="0"
            bottom="110%"
            width="24rem"
            opacity={leftOpacity}
            children={
              <DetailList
                desc={["参数校验", "用户身份验证", "【防垂直越权】访问控制"]}
              />
            }
          />
          <Wrapper
            top="110%"
            left="%"
            width="20rem"
            opacity={leftOpacity}
            children={<Block title="权限中台系统" desc={["RBAC 授权"]} />}
          />
          <Wrapper
            top="110%"
            left="36%"
            width="20rem"
            opacity={leftOpacity}
            children={<Block title="班课权限系统" desc={["RBAC 授权"]} />}
          />
          <Wrapper
            top="110%"
            left="69%"
            width="20rem"
            opacity={leftOpacity}
            children={<Block title="第三方权限系统" desc={["授权"]} />}
          />
          {/* <Wrapper
            top="110%"
            left="110%"
            width="30rem"
            opacity={rightOpacity}
            children={
              <Block
                title="DAO Proxy Admin"
                desc={[
                  "业务授权",
                  "DB，表，字段授权",
                  "敏感数据属性配置（uin，手机号等）",
                  "授权审核",
                ]}
              />
            }
          /> */}
          <Wrapper
            left="35%"
            bottom="110%"
            width="30rem"
            opacity={rightOpacity}
            children={
              <DetailList
                desc={[
                  "禁用 Select *",
                  "禁用 dataSoucreId 为变量",
                  "限定数据记录数量",
                  "【防平行越权】自动添加 uin 查询条件",
                ]}
              />
            }
          />
        </Wrapper>
        <Wrapper
          ref={rightPipelineRef}
          left="77%"
          pointer
          yCenter
          width="1.6rem"
          children={
            <Pipeline desc={"内网"} listDesc={["【防篡改】请求签名"]} />
          }
        />
        <Wrapper ref={daoRef} right="1%" width="12rem" yCenter pointer>
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            }}
            onMouseEnter={() => {
              setlastOpacity(1);
              setlastListOpacity(1);
            }}
            onMouseLeave={() => {
              setlastOpacity(0);
              setlastListOpacity(0);
            }}
          ></div>
          <Site imgUrl={daoURL} desc={"Dao Proxy"} />
          <Wrapper
            top="142%"
            right="0"
            width="20rem"
            opacity={lastOpacity}
            children={<Block title="第三方权限系统" desc={["授权"]} />}
          />
          <Wrapper
            right="0"
            bottom="110%"
            width="24rem"
            opacity={lastListOpacity}
            children={
              <DetailList
                desc={["参数校验", "用户身份验证", "【防垂直越权】访问控制"]}
              />
            }
          />
        </Wrapper>
      </main>
    </div>
  );
}
