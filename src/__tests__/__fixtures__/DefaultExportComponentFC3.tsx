import * as React from "react";

interface DefaultExportComponentFC3Props {
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
export const DefaultExportComponentFC3: React.FC<DefaultExportComponentFC3Props> = (
  props
) => (
  <button disabled={props.disabled} style={{ backgroundColor: props.color }}>
    {props.counter}
    {props.children}
  </button>
);

export default DefaultExportComponentFC3;
