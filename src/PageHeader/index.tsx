import React, { memo } from 'react';
import { PageHeaderProps } from './interface';
import style from './pageHeader.less';
const PageHeadr: React.FC<PageHeaderProps> = ({ content, title, back }) => {
  const handleBack = () => {
    // 根据back的值执行相应的操作
    if (back === 'goBack') {
      // 执行返回操作
      window.history.back();
    }
  };

  return (
    <div>
      <div className={style.header}>
        <div className={style.headleft}>
          <div onClick={handleBack} className={style.title}>
            <p> &lt;- </p>
            <div className={style.headtitle}>{title}</div>
          </div>
        </div>
        <div className={style.headcontent}>{content}</div>
      </div>
    </div>
  );
};

export default PageHeadr;
