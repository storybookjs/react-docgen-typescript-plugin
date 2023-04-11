import * as React from "react";

interface DefaultExportForwardRefProps {
  /**
   * Button color.
   *
   * @default blue
   **/
  color: "blue" | "green";

  /**
   * Button counter.
   */
  counter: number;

  /**
   * Button disabled.
   */
  disabled: boolean;
}

/**
 * Component with a prop with a default value.
 */
const DefaultExportForwardRef = React.forwardRef(
  (props: React.PropsWithChildren<DefaultExportForwardRefProps>, ref) => (
    <button disabled={props.disabled} style={{ backgroundColor: props.color }}>
      {props.counter}
      {props.children}
    </button>
  )
);

export default DefaultExportForwardRef;
