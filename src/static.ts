import * as userFactory from './factory/user';
import * as commonFactory from './factory/_common';

export namespace common {
  export import ActiveFlag = commonFactory.ActiveFlag;
  export import DeleteFlag = commonFactory.DeleteFlag;
}

export namespace User {
  export import Role = userFactory.Role;
  export import Sex = userFactory.Sex;
}