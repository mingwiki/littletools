import {
  LinkOutlined,
  CloudUploadOutlined,
  UserOutlined,
  PaperClipOutlined,
  QrcodeOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
export const data = [
  {
    key: '1',
    icon: <LinkOutlined />,
    label: <Link to='01'>生成小程序链接</Link>,
  },
  {
    key: '2',
    icon: <QrcodeOutlined />,
    label: <Link to='02'>二维码生成工具</Link>,
  },
  {
    key: '3',
    icon: <UserOutlined />,
    label: <Link to='03'>个人中心</Link>,
  },
  {
    key: '4',
    icon: <PaperClipOutlined />,
    label: <Link to='04'>解析Page参数</Link>,
  },
  {
    key: '5',
    icon: <CloudUploadOutlined />,
    label: <Link to='05'>批量上传小程序链接</Link>,
  },
]
