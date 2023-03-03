import * as React from "react";

interface DefaultPropValueComponentProps {
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
export default function DefaultExportComponent(props: React.PropsWithChildren<DefaultPropValueComponentProps) {
  return (<button disabled={props.disabled} style={{ backgroundColor: props.color }}>
    {props.counter}
    {props.children}
  </button>);
}

DefaultExportComponent.defaultProps = {
  counter: 123,
  disabled: false,
};
