import { useSearchParams } from "react-router-dom";

const index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let params = [];
  searchParams?.forEach((value, key) => {
    params = {...params, [key]: value }
  });
  console.log("🚀 ~ file: index.js:5 ~ index ~ parent_sku:", params);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default index;
