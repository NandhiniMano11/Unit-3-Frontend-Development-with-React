import PropTypes from 'prop-types';
 export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};
            