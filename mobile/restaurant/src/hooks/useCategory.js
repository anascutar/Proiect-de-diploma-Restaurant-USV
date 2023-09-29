import React from "react";

export const useCategory = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      // console.log(categoryList);
      const resp = await fetch("http://192.168.0.102:19001/api/category");
      // const resp = await fetch("http://localhost:3000/meniul-zilei");
      const data = await resp.json();
      //console.log(data + "category data");
      setCategoryList(data);
    })();
  }, []);

  return categoryList;
};
