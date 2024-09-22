import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/wines">酒类产品</a></li>
        <li><a href="/about">关于我们</a></li>
        <li><a href="/contact">联系我们</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;