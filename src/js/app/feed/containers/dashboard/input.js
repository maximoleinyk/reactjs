import {PropTypes} from 'react';
import Component from 'common/component';
import {Form, Fieldset, TextBox} from 'common/components';

class FeedBox extends Component {
  render() {
    let {defaultValue} = this.props;

    return (
      <Form onSubmit={this.props.handler}>
        <Fieldset legend={'new feed item'} srOnly={true}>
          <TextBox ref='textBox' srOnly={true} label='message'
            field="message" placeholder="Wazzaaaap?"
            defaultValue={defaultValue}/>
        </Fieldset>
      </Form>
    );
  }

  componentDidMount() {
    this.refs.textBox.select();
  }

  focus() {
    this.refs.textBox.focus();
  }

  enable(flag = true) {
    if (!flag) {
      this.refs.textBox.disable();
      return;
    }

    this.refs.textBox.enable();
  }

  getValue() {
    return this.refs.textBox.getValue().trim();
  }

  clear() {
    this.refs.textBox.clear();
  }

  select() {
    this.refs.textBox.select();
  }
}

FeedBox.propTypes = {
  handler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
};

export default FeedBox;
