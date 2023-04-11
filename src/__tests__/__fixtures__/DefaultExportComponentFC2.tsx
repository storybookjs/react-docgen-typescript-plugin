import * as React from "react";

interface DefaultExportComponentFC2Props {
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
const DefaultExportComponentFC2 = (
  props: React.PropsWithChildren<DefaultExportComponentFC2Props>
) => (
  <button disabled={props.disabled} style={{ backgroundColor: props.color }}>
    {props.counter}
    {props.children}
  </button>
);

export default DefaultExportComponentFC2;
