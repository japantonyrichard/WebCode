import Vue from 'vue'
import {
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    Table,
    TableColumn,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Col,
    DatePicker,
    TimePicker,
    Dialog,
    Message,
    MessageBox,
    Tree,
    Upload,
    Dropdown,
    DropdownMenu,
    DropdownItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Dialog)
Vue.use(Tree)
Vue.use(Upload)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);


Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;