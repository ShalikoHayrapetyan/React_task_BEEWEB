import { Spin, Space } from "antd";

function Loading() {
  return (
    
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>

  );
}
export default Loading;
