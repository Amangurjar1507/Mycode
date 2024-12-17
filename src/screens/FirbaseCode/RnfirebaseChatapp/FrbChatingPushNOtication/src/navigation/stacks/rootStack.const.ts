 import Login from '../../screens/auth/login/Login';
import SplashScreen from '../../screens/auth/splashScreen/SplashScreen';
import Dashboard from '../../screens/home/dashBord/Dashboard';
import Notification from '../../screens/home/notification/Notification';
import OrderDetails from '../../screens/home/orderDetails/OrderDetails';
import OrderList from '../../screens/home/orderList/OrderList';
import HomeDrawerCustom from '../customDrawer/CustomDrawerHomeMain';

export const stackScreens = [
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'Login', component: Login},
  {name: 'Dashboard', component: Dashboard},
  {name: 'HomeDrawerCustom', component: HomeDrawerCustom},
  {name: 'OrderList', component: OrderList},
  {name: 'OrderDetails', component: OrderDetails},
  {name: 'Notification', component: Notification},
];
