import { ActiveFlag, DeleteFlag } from './_common';

export enum Role {
  User = 1,
  Shop = 2,
  Admin = 3
}

export enum Sex {
  Man = 1,
  Woman = 2
}

export interface UserMainAttr {
  email: string;
  password: string;
  role: Role;
  activeFlag: ActiveFlag;
  firstName: string;
  lastName: string;
  deletedFlag: DeleteFlag;
  sex: Sex;
  birthday: Date;
  address: string;
  address2: string;
  phoneNo: string;
  phoneNo2: string;
  avatar: string;
  lastLogin: Date;
  province: number;
  country: number;
  ward: number;
}