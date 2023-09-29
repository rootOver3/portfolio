import clsx from "clsx";
import PropTypes from "prop-types";
import { memo } from "react";

function Container({ className, children, ...rest }) {
  return (
    <div
      className={clsx('p_c__container', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default memo(Container);
