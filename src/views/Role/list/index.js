import { Fragment } from "react";
import RoleCards from "./RoleCards";

const index = () => {
  return (
    <div className="app-user-list">
      <Fragment>
      <h3>Roles List</h3>
      <p className='mb-2'>
        A role provides access to predefined menus and features depending on the assigned role to an administrator that
        can have access to what he needs.
      </p>
      <RoleCards />
    </Fragment>
    </div>
  );
};
export default index;
