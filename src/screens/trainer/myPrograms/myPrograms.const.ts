import svgIndex from '@svgIndex';

export const myProgramsList = [
  {
    id: 1,
    title: 'Crossfit',
    amount: '12.99$',
    nextDate: 'Next Payout Date: 12/02/23',
    followers: '16k',
    rating: '4.5',
    tradingUp: '90%',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Crossfit',
    amount: '12.99$',
    nextDate: '5% Increase of active users',
    followers: '16k',
    rating: '4.5',
    tradingUp: '80%',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Package',
    amount: '12.99$',
    nextDate: '5% Increase of active users',
    followers: '16k',
    rating: '4.5',
    tradingUp: '50%',
    status: 'Deactivated',
  },
  {
    id: 4,
    title: 'Package',
    amount: '12.99$',
    nextDate: '5% Increase of active users',
    followers: '16k',
    rating: '4.5',
    tradingUp: '50%',
    status: 'Deleted',
  },
];
export const bottomSheetList = [
  {id: 1, title: 'Copy link', icon: svgIndex?.copy},
  {id: 2, title: 'Share', icon: svgIndex?.reply},
  {id: 3, title: 'Edit', icon: svgIndex?.edit},
  {id: 4, title: 'Deactivate', icon: svgIndex?.deactivate},
  {id: 5, title: 'Delete', icon: svgIndex?.deletePurpal},
];

export const userDetailsData = {
  fName: 'Janet Austin',
  lName: 'Austin',
  education: 'Fitness Trainer',
  location: 'Miami, Fl',
  experience: '5 Years',
  about: 'Alex Magot',
  instagram: '@alexmargot',
  tikTok: '@alexmargot',
}