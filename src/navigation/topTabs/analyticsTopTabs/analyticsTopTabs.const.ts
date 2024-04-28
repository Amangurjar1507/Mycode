import FinancialManagement from '@screens/trainer/financialManagement/FinancialManagement';
import Overview from '@screens/trainer/overview/Overview';
import ProgramManagement from '@screens/trainer/programManagement/ProgramManagement';
import ReferralManagement from '@screens/trainer/referralManagement/ReferralManagement';
import TraineeManagement from '@screens/trainer/traineeManagement/TraineeManagement';
import UserManagement from '@screens/trainer/userManagement/UserManagement';

export const AnalyticsTopTab = [
  {id: 1, name: 'Overview', component: Overview},
  {id: 2, name: 'ProgramManagement', component: ProgramManagement},
  {id: 3, name: 'ReferralManagement', component: ReferralManagement},
  {id: 4, name: 'FinancialManagement', component: FinancialManagement},
  {id: 5, name: 'TraineeManagement', component: TraineeManagement},
  {id: 6, name: 'UserManagement', component: UserManagement},
];
