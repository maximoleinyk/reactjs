import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import Input from './input';
import List from './list';
import {create} from './actions';

class Feed extends Component {
	render() {
		return (
			<div class="container app-feed">
				<div class="row">
					<section class="col-xs-12">
						<Input ref='input' handler={this.create.bind(this)}/>
					</section>
				</div>
				<div class="row">
					<section class="col-xs-12">
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

    this.refs.input.enable(false);
		this.props.dispatch(create(value))
      .then(() => {
        this.refs.input.enable(true);
        this.refs.input.clear();
        this.refs.input.focus();
      })
      .catch(() => {
        this.refs.input.enable(true);
      });
	}
}

Feed.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(Feed);
