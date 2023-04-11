import * as React from "react";

interface DefaultExportComponentFCProps {
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
const DefaultExportComponentFC: React.FC<DefaultExportComponentFCProps> = (
  props
) => (
  <button disabled={props.disabled} style={{ backgroundColor: props.color }}>
    {props.counter}
    {props.children}
  </button>
);

export default DefaultExportComponentFC;
