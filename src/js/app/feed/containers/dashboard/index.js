import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import Input from './input';
import List from './list';
import {create} from './actions';

class Feed extends Component {
	render() {
		return (
			<div className="container app-feed">
				<div className="row">
					<section className="col-xs-12">
						<Input ref='input' handler={this.create.bind(this)}/>
					</section>
				</div>
				<div className="row">
					<section className="col-xs-12">
						<List />
					</section>
				</div>
			</div>
		);
	}

	create() {
		const value = this.refs.input.getValue();

		if (!value.length) {
			return;
		}

		this.props.dispatch(create(value));
		this.refs.input.clear();
	}
}

Feed.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(Feed);
