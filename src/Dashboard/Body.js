import { Button } from "antd";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { add } from "../Redux/action";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

function Body() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const dispatch = useDispatch();
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  const addItem = (text) => {
      let newItem = {
        id: uuidv4(),
        text,
      };
      dispatch(add(newItem));
      setValue([
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ]);
    
  };

  return (
    <>
      <div>
        <div className="textForm">
          <Slate
            editor={editor}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          >
            <Editable />
          </Slate>
        </div>
        <Button

           disabled={`${value[0]["children"][0]["text"]=== "" ? "able" : ""}`}
          className="addBtn"
          type="primary"
          htmlType="submit"
          onClick={() => addItem(value[0]["children"][0]["text"])}
        >
          ADD
        </Button>
      </div>

      <List />
    </>
  );
}

export default Body;
