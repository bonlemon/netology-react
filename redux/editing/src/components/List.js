import React from "react";
import { connect } from "react-redux";
import { removeService, editService } from "../actions";

function List({ items, onEdit, onRemove }) {
  const handleEdit = id => {
    onEdit(id);
  };

  const handleRemove = id => {
    onRemove(id);
  };

  return (
    <ul>
      {items.map(({ id, name, price }) => (
        <li key={id}>
          {name} {price}
          <button onClick={() => handleEdit({ id, name, price })}>edit</button>
          <button onClick={() => handleRemove(id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ serviceList }) => {
  return { items: serviceList };
};
const mapDispatchToProps = dispatch => {
  return {
    onEdit: service => dispatch(editService(service)),
    onRemove: id => dispatch(removeService(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
