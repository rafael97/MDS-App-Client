import React from 'react';
import PropTypes from 'prop-types';
import Progressbar from 'emerald-ui/lib/Progressbar';

class Loading extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          width: '100vw'
        }}
        className={this.props.className}
      >
        <Progressbar continuous />
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;