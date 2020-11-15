export enum DeleteFlag {
  'Not Delete' = 1,
  'Deleted' = 2
}

export enum ActiveFlag {
  Inactive = 1,
  Active = 2
}

export interface ICommonAttr {
  id: number;
  createdAt: Date;
  createdBy: number;
  createdUserName: string;
  updatedAt: Date;
  updatedBy: number;
  updatedUserName: string;
}