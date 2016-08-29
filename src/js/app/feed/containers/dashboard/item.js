import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import Input from './input';
import {remove, update} from './actions';

class Item extends Component {
	constructor() {
		super();

		this.state = {
			readMode: true
		};
	}

	updateItem() {
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

	render() {
		let input = (
			<div className="flex">
				<div className="flex-grow-1 ellipsis">
					<Input ref='input' handler={this.updateItem.bind(this)}
						defaultValue={this.props.item.text}/>
				</div>
			</div>
		);
		let text = (
			<div className="flex">
				<div className="flex-grow-1 ellipsis"
             onDoubleClick={() => this.setState({ readMode: false })}>
					{this.props.item.text}
				</div>
        <a href="#" onClick={this.props.remove}>
          <span className="fa fa-close"></span>
        </a>
			</div>
		);

		return this.state.readMode ? text : input;
	}
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    remove(e)  {
      e.preventDefault();

      dispatch(remove(props.item.id));
    },

    update(value) {
      dispatch(update(value));
    }
  };
}

export default connect(undefined, mapDispatchToProps)(Item);
