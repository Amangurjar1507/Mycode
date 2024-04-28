import SvgIndex from '@svgIndex';

export const settingsList = [
  {
    id: '1',
    sectionTitle: 'Account',
    settings: [
      {
        id: '1',
        title: 'Switch to trainee',
        icon: SvgIndex.userSwitch,
        navigation: '',
      },
      {
        id: '2',
        title: 'Change Email & Password',
        icon: SvgIndex.changePassword,
        navigation: 'ChangeEmailPassword',
      },
      {
        id: '3',
        title: 'Edit Profile',
        icon: SvgIndex.accountCircle,
        navigation: 'EditProfile',
      },
    ],
  },
  {
    id: '2',
    sectionTitle: 'Transactions',
    settings: [
      {
        id: '1',
        title: 'Transaction',
        icon: SvgIndex.transaction,
        navigation: 'Transaction',
      },
    ],
  },
  {
    id: '3',
    sectionTitle: 'Region & Language',
    settings: [
      {
        id: '1',
        title: 'Language',
        icon: SvgIndex.translate,
        navigation: 'Language',
      },
      {
        id: '2',
        title: 'Country/Region',
        icon: SvgIndex.flag,
        navigation: 'CountryRegion',
      },
    ],
  },
  {
    id: '4',
    sectionTitle: 'Legal Policies',
    settings: [
      {
        id: '1',
        title: 'Terms of Use',
        icon: SvgIndex.gavel,
        navigation: '',
      },
      {
        id: '2',
        title: 'Privacy Policy',
        icon: SvgIndex.privacyPolicy,
        navigation: '',
      },
    ],
  },
  {
    id: '5',
    sectionTitle: 'Help & Support',
    settings: [
      {
        id: '1',
        title: 'App FAQs',
        icon: SvgIndex.quiz,
        navigation: '',
      },
      {
        id: '2',
        title: 'Contact Us',
        icon: SvgIndex.supportAgent,
        navigation: '',
      },
    ],
  },
  {
    id: '6',
    sectionTitle: '',
    settings: [
      {
        id: '1',
        title: 'Log Out',
        icon: SvgIndex.logout,
      },
    ],
  },
  {
    id: '7',
    sectionTitle: '',
    settings: [
      {
        id: '1',
        title: 'Delete Account',
        icon: SvgIndex.deleteRed,
      },
    ],
  },
];
