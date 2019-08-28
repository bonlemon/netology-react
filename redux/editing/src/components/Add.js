import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeServiceField, addService, updateServices } from "../actions";

function Add({ item: { name, price, id }, onChange, onUpdate, onSave }) {
  const handleChange = evt => {
    const { name, value } = evt.target;
    onChange(name, value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (id) {
      onUpdate({ id, name, price });
    } else {
      onSave(name, price);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={name} />
      <input name="price" onChange={handleChange} value={price} />
      <button type="submit">Save</button>
    </form>
  );
}
Add.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { serviceAdd } = state;
  return { item: serviceAdd };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, value) => dispatch(addService(name, value)),
    onUpdate: service => dispatch(updateServices(service))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
