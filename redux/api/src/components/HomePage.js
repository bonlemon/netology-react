import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import Add from "./Add";
import List from "./List";
import CircularProgress from "@material-ui/core/CircularProgress";

class HomePage extends React.Component {
  componentDidMount() {
    const { onFetch } = this.props;
    onFetch();
  }
  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <CircularProgress />
    ) : (
      <div className="home-page">
        <Add />
        <List />
      </div>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return { isLoading: network.isLoading };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => dispatch(fetchItems())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
