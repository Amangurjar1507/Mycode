import {styles} from './overview.style';

const chartList = [
  {
    value: 160,
    date: '1 Apr 2022',
    label: '23/02/23',
    labelTextStyle: styles.chartLable,
  },
  {value: 180, date: '2 Apr 2022'},
  {value: 190, date: '3 Apr 2022'},
  {value: 180, date: '4 Apr 2022'},
  {value: 140, date: '5 Apr 2022'},
  {value: 145, date: '6 Apr 2022'},
  {value: 160, date: '7 Apr 2022'},
  {value: 200, date: '8 Apr 2022'},
  {value: 220, date: '9 Apr 2022'},
  {
    value: 240,
    date: '10 Apr 2022',
    label: '23/02/23',
    labelTextStyle: styles.chartLable,
  },
  {value: 280, date: '11 Apr 2022'},
  {value: 260, date: '12 Apr 2022'},
  {value: 340, date: '13 Apr 2022'},
  {value: 385, date: '14 Apr 2022'},
  {value: 280, date: '15 Apr 2022'},
  {value: 390, date: '16 Apr 2022'},
  {value: 370, date: '17 Apr 2022'},
  {value: 285, date: '18 Apr 2022'},
  {value: 295, date: '19 Apr 2022'},
  {
    value: 300,
    date: '20 Apr 2022',
    label: '23/02/23',
    labelTextStyle: styles.chartLable,
  },
  {value: 280, date: '21 Apr 2022'},
  {value: 295, date: '22 Apr 2022'},
  {value: 260, date: '23 Apr 2022'},
  {value: 255, date: '24 Apr 2022'},

  {value: 190, date: '25 Apr 2022'},
  {value: 220, date: '26 Apr 2022'},
  {value: 205, date: '27 Apr 2022'},
  {value: 230, date: '28 Apr 2022'},
  {value: 210, date: '29 Apr 2022'},
  {
    value: 200,
    date: '30 Apr 2022',
    label: '23/02/23',
    labelTextStyle: styles.chartLable,
  },
  {value: 240, date: '1 May 2022'},
  {value: 250, date: '2 May 2022'},
  {value: 280, date: '3 May 2022'},
  {value: 250, date: '4 May 2022'},
  {value: 210, date: '5 May 2022'},
];

const dropdownList = [
  {
    id: 1,
    title: 'Last Week',
  },
  {
    id: 2,
    title: 'Last 24h',
  },
  {
    id: 3,
    title: 'Last Month',
  },
  {
    id: 4,
    title: 'Last Year',
  },
  {
    id: 5,
    title: 'Max',
  },
];

const carouselData = [
  {
    id: 1,
    data: [
      {
        id: 1,
        title: 'Total Subscribers',
        amount: '35,000',
        description: 'Increase of active users',
        progress: '5',
      },
      {
        id: 2,
        title: 'Total Programs',
        amount: '3,527',
        description: 'Increase of active users',
        progress: '8',
      },
      {
        id: 3,
        title: 'New Subscribers',
        amount: '35,000',
        description: 'Increase of active users',
        progress: '10',
      },
      {
        id: 4,
        title: 'Retention Rate',
        amount: '60%',
        description: 'Increase of active users',
        progress: '2',
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        title: 'Active Subscribers ',
        amount: '35,000',
        description: 'Increase of active users',
        progress: '5',
      },
      {
        id: 2,
        title: 'Total Earnings',
        amount: '3,527',
        description: 'Increase of active users',
        progress: '8',
      },
      {
        id: 3,
        title: 'Referrals Conversion',
        amount: '35,000',
        description: 'Increase of active users',
        progress: '10',
      },
      {
        id: 4,
        title: 'Rate Viewership',
        amount: '60%',
        description: 'Increase of active users',
        progress: '2',
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        title: 'User engagement',
        amount: '35,000',
        description: 'Increase of active users',
        progress: '5',
      },
    ],
  },
];

export {chartList, dropdownList, carouselData};
