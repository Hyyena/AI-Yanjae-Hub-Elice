import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  let idx = 0;

  useEffect(() => {
    console.log(list);
  }, [list]);

  const insertData = () => {
    setText("");
    setList([
      ...list,
      {
        index: idx++,
        text: text,
        status: false,
      },
    ]);
  };

  const deleteData = (index) => {
    const getList = list.filter((it) => it.index !== index);
    setList(getList);
  };

  const checkData = (index) => {
    const getList = [...list];
    getList[index].status = true;
    setList(getList);
  };

  return (
    <div className="App">
      <input
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type={"button"} value={"Add"} onClick={insertData} />
      <div className="container">
        <ol>
          {list.map((it) => (
            <li key={it.index} className={it.status === true ? "line" : ""}>
              {it.text}
              <button
                onClick={() => {
                  checkData(it.index);
                }}
              >
                Check
              </button>
              <button
                onClick={() => {
                  deleteData(it.index);
                }}
              >
                Del
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
