import React from "react";
import { connect } from "react-redux";
import { removeService, editService, fetchItems } from "../actions";
import { Button } from "@material-ui/core";

function List({ items, error, onFetch, onEdit, onRemove }) {
  const handleEdit = id => {
    onEdit(id);
  };

  const handleRemove = id => {
    onRemove(id);
  };

  return error ? (
    <Button variant="contained" color="secondary" onClick={onFetch}>
      {error}
    </Button>
  ) : (
    <ul className="list">
      {items.map(({ id, name, price }) => (
        <li key={id} className="list-item">
          {name} {price}
          <div className="list-button">
            <Button
              variant="contained"
              onClick={() => handleEdit({ id, name, price })}
            >
              edit
            </Button>
            <Button variant="contained" onClick={() => handleRemove(id)}>
              ✕
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ list, network }) => {
  return { items: list, error: network.error };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => dispatch(fetchItems()),
    onEdit: service => dispatch(editService(service)),
    onRemove: id => dispatch(removeService(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
