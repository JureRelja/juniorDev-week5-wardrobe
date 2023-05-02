import React, { useState } from "react";

function EditItem(props) {
  const [text, setText] = useState("Edit");

  const editHandler = (e) => {
    if (props.edit) {
      props.setEdit(false);
      setText("Edit");
      props.submitHandler();
    } else {
      props.setEdit(true);
      setText("Save");
    }
  };

  return (
    <button className="button" onClick={editHandler}>
      {text}
    </button>
  );
}

export default EditItem;
