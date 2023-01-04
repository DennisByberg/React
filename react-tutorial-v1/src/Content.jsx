import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
          NO ITEMS IN THE LIST
        </p>
      )}
    </main>
  );
};

export default Content;
