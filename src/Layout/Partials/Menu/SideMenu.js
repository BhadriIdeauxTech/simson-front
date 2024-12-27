
import { HiShoppingCart } from 'react-icons/hi';
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SideMenu = () => {

  const rootSubinmenuKeys = ['sub1', 'sub2'];
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubinmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const items = [
    getItem('Dashboard', ''),
    // getItem('SEO', 'seo'),

    //============== Admin Page start =================

    // getItem('Simpson Garments', 'sub1', <MdCrisisAlert />, [
    //   getItem('Home', 'home'),
    //   getItem('Shop', 'shop'),
    //   getItem('About Us', 'about'),
    //   getItem('Contact Us', 'contact'),

    // ]),
    getItem('Products', 'sub1', <HiShoppingCart />, [
      getItem('Add Product', 'addproduct'),
      getItem('View Product', 'viewproduct'),
    ]),

    getItem('Customers', 'sub2', <HiShoppingCart />, [
      getItem('View Customers', 'viewCustomers'),
    ]),


  ];

  const navigate = useNavigate();
  const onClick = ({ key }) => {

    if (key === null) {
      console.log('no navigate')

    }
    else {
      navigate(`${key}/`)
    }
  }
  return (
    <>

      <Menu
        onClick={onClick}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={['1']}
        // onClick={()=> onOopenSub()}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </>
  )
}

export default SideMenu
