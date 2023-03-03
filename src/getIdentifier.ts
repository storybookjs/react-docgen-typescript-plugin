/* eslint-disable import/prefer-default-export */
import { ComponentDoc } from "react-docgen-typescript";

export function getIdentifier(d: ComponentDoc): string {
  const name = d.expression?.getName();
  return name === "default" || !name ? d.displayName : name;
}
