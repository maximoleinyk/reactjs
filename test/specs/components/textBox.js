/* global describe it assert */
import { shallow, mount } from 'enzyme';
import TextBox from 'common/components/textBox';

describe('TextBox', () => {
  describe('#render', () => {
    it('should be wrapped with <div class="form-group"> class name', () => {
      const wrapper = shallow(<TextBox />);

      assert.equal(wrapper.find('.form-group').length, 1);
    });

    it('should not render label with "sr-only" class by default', () => {
      const wrapper = shallow(<TextBox />);

      assert.isFalse(wrapper.find('label').hasClass('sr-only'));
    });

    it('should render text inside label element', () => {
      const wrapper = shallow(<TextBox label="label"/>);

      assert.equal(wrapper.find('label').text(), 'label');
    });

    it('should render label with "sr-only" class if srOnly is set', () => {
      const wrapper = shallow(<TextBox srOnly={true}/>);

      assert.isTrue(wrapper.find('label').hasClass('sr-only'));
    });

    it('should render input element equal name and id properies', () => {
      const wrapper = shallow(<TextBox field="field" label="label"/>);
      const id = wrapper.find('input').prop('id');
      const name = wrapper.find('input').prop('name');

      assert.equal(id, name);
    });
  });

  describe('#getValue', () => {
    it('should return empty string text', () => {
      const wrapper = mount(<TextBox />);

      assert.equal(wrapper.instance().getValue(), '');
    });

    it('should return text defined by default', () => {
      const value = 'VALUE';
      const wrapper = mount(<TextBox defaultValue={value}/>);

      assert.equal(wrapper.instance().getValue(), value);
    });
  });

  describe('#disable', () => {
    it('should disable input after rendering', () => {
      const wrapper = mount(<TextBox />);

      wrapper.instance().disable();

      assert.isTrue(wrapper.find('input').prop('disabled'));
    });
  });

  describe('#enable', () => {
    it('should disable input after rendering', () => {
      const wrapper = mount(<TextBox />);
      const component = wrapper.instance();

      component.disable();

      assert.isTrue(wrapper.find('input').prop('disabled'));

      component.enable();

      assert.isFalse(wrapper.find('input').prop('disabled'));
    });
  });

  describe('#clear', () => {
    it('should clear text value', () => {
      const wrapper = mount(<TextBox defaultValue='value'/>);
      const component = wrapper.instance();

      component.clear();

      assert.equal(component.getValue(), '');
    });
  });
});
