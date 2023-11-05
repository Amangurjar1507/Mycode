import {MutableRefObject} from 'react';

export interface inviteInterface {
  userUpdate: () => void;
  deviceVersion: string;
  setDeviceVersion: React.Dispatch<React.SetStateAction<string>>;
}
