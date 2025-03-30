import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} 面试刷题平台</div>
      <div>
        <a href="https://gitee.com/yang-jiaxing-1/interview-brushing-platform-backed" target="_blank">
          作者：yangjx
        </a>
      </div>
    </div>
  );
}
