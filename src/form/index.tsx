import '../style';
import InternalForm from './form';
import Item from './formItem';
import { useForm } from 'rc-field-form';

// 定义Form接口类型
interface FormInterface extends React.ForwardRefExoticComponent<any> {
  Item: typeof Item;
  useForm: typeof useForm;
}

// 创建Form组件并添加Item属性
const Form = InternalForm as FormInterface;
Form.Item = Item;
Form.useForm = useForm;

// 导出Form组件和类型
export default Form;
export * from './form';
export * from './formItem';

// 导出Form.Item的类型
export type FormItemType = typeof Item;
