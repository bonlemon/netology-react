import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  changeServiceField,
  addService,
  updateServices,
  cancelUpdate
} from "../actions";

import { TextField, Button } from "@material-ui/core";

function Add({
  item: { name, price, id },
  onChange,
  onUpdate,
  onSave,
  onCancel
}) {
  const handleChange = evt => {
    const { name, value } = evt.target;
    onChange(name, value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (id) {
      onUpdate({ id, name, price });
    } else {
      onSave({ name, price });
    }
  };

  const handleCancel = () => onCancel();

  return (
    <form
      className={"form" + (id ? " form--editable" : "")}
      onSubmit={handleSubmit}
    >
      {/* <input name="name" onChange={handleChange} value={name} />
      <input name="price" onChange={handleChange} value={price} /> */}

      <TextField
        label="Услуга"
        name="name"
        onChange={handleChange}
        value={name}
        variant="outlined"
      />
      <TextField
        label="Цена"
        name="price"
        onChange={handleChange}
        value={price}
        variant="outlined"
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>

      {id && (
        <Button onClick={handleCancel} variant="contained" color="primary">
          Cancel
        </Button>
      )}

      {/* <button type="submit">Save</button> */}

      {/* {id && (
        <button onClick={handleCancel} type="submit">
          Cancel
        </button>
      )} */}
    </form>
  );
}
Add.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { item: state.add };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: service => dispatch(addService(service)),
    onUpdate: service => dispatch(updateServices(service)),
    onCancel: () => dispatch(cancelUpdate())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
