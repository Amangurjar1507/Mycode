import Notification from '../../../assets/svg/Notification';
import OrderList from '../../../screens/home/orderList/OrderList';
import MyDashBoardStack from '../../myDashBoardStack/MyDashBoardStack';

export const homeBottomTabs = [
  {id: 1, name: 'Dashboard', component: MyDashBoardStack},
  {id: 2, name: 'OrderList', component: OrderList},
];
