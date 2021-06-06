import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { deleteItem } from "../Redux/action";
import Loading from "./Loading";

function List() {
  const listItems = useSelector((state) => state.data.items);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("Column");

  const changeSort = () => {
    if (sort === "Row") {
      setSort("Column");
    } else setSort("Row");
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (!listItems) return <Loading />;
  return (
    <>
      <hr />
      <div className="container">
        {listItems.map((card) => (
          <div
            className={`card ${sort !== "Column" ? "column" : null}`}
            key={card.id}
          >
            {card.text}
            <p className="delBtn" onClick={() => dispatch(deleteItem(card.id))}>
              X
            </p>
          </div>
        ))}
      </div>
      <Button
        disabled={`${listItems.length ? "" : ""}`}
        className="sortBtn"
        type="primary"
        htmlType="submit"
        onClick={changeSort}
      >
        {sort}
      </Button>
    </>
  );
}

export default List;
