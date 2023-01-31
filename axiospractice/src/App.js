import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos/",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {data.map((item, idx) => {
        return <div>{item.title}</div>;
      })}
    </>
  );
}
