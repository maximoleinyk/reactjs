import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import Input from './input';

class Item extends Component {
  constructor() {
    super();

    this.state = {
      readMode: true
    };
  }

  update() {
    const value = this.refs.input.getValue();

    if (!value.length) {
      return;
    }

    this.props.update({
      id: this.props.item.id,
      text: value
    });
    this.setState({
      readMode: true
    });
  }

  remove(e)  {
    e.preventDefault();

    this.props.remove(this.props.item.id);
  }

  makeEditable() {
    this.setState({ readMode: false });
  }

  render() {
    let input = (
      <div className="flex">
        <div className="flex-grow-1 ellipsis">
          <Input ref='input' handler={this.update.bind(this)}
          defaultValue={this.props.item.text}/>
        </div>
      </div>
    );
    let text = (
      <div className="flex">
        <div className="flex-grow-1 ellipsis"
          onDoubleClick={this.makeEditable.bind(this)}>
          {this.props.item.text}
        </div>
        <a href="#" onClick={this.remove.bind(this)}>
          <span className="fa fa-close"></span>
        </a>
      </div>
    );

    return this.state.readMode ? text : input;
  }

  componentDidUpdate() {
    if (!this.refs.input) {
      return;
    }

    this.refs.input.select();
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default connect()(Item);
