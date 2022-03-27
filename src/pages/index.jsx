import styles from './index.less';
import React, { useState } from 'react';
import { ImportTemplateFile, CheckTreeModal } from 'yl-slsw-business-ui';
// import { Button, Modal } from 'antd';

const treeList = [
  {
    title: '父级单位',
    treeData: [
      {
        title: '广东省',
        key: '1-1',
        children: [
          {
            title: '广州市',
            key: '1-1-1',
          },
          {
            title: '深圳市',
            key: '1-1-2',
          },
          {
            title: '梅州市',
            key: '1-1-3',
          },
        ],
      },
    ],
  },
  {
    title: '同级单位',
    treeData: [
      {
        title: '武汉市',
        key: '2-1',
      },
      {
        title: '孝感市',
        key: '2-2',
        children: [
          {
            title: '汉川市',
            key: '2-2-1',
          },
        ],
      },
    ],
  },
];

export default function IndexPage() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleSuccess = () => {
    setVisible(false);
  };

  const [visible2, setVisible2] = useState(false);

  const showModal2 = () => {
    setVisible2(true);
  };

  const hideModal2 = () => {
    setVisible2(false);
  };

  const handleSuccess2 = (list) => {
    setVisible2(false);
    console.log('check list==>', list);
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>测试 ImportTemplateFile 组件：</h2>
      <a onClick={showModal}>导入</a>
      <ImportTemplateFile
        loadBtnName="下载 Excel 模板"
        fileUrl="/oss/guangdong/excel/批量生成在建碧道导入模板.xlsx"
        onSuccess={handleSuccess}
        modalProps={{
          visible,
          onCancel: hideModal,
        }}
        uploadProps={{
          action: '/api/import',
        }}
      />
      <h2>测试 CheckTreeModal 组件：</h2>
      <a onClick={showModal2}>接收人</a>
      <CheckTreeModal
        treeList={treeList}
        modalProps={{
          visible: visible2,
          onCancel: hideModal2,
          onOk: handleSuccess2,
        }}
      />
    </div>
  );
}
