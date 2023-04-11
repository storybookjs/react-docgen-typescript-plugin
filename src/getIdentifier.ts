/* eslint-disable import/prefer-default-export */
import { ComponentDoc } from "react-docgen-typescript";

// From: https://github.com/styleguidist/react-docgen-typescript/blob/287e7012843cb26fed8f4bd8ee24e462c25a1414/src/parser.ts#L308-L317
const defaultComponentTypes = [
  "__function",
  "StatelessComponent",
  "Stateless",
  "StyledComponentClass",
  "StyledComponent",
  "FunctionComponent",
  "ForwardRefExoticComponent",
  "MemoExoticComponent",
];

export function getIdentifier(d: ComponentDoc): string {
  const name = d.expression?.getName();

  // In those cases, react-docgen-typescript can not find a runtime name because a default export is used.
  // We fall back to the displayName, although this doesn't work for every case.
  //
  // It works in cases where the file name matches the variable name used for the default export:
  //
  // src/component/MyComponent.tsx
  // const MyComponent: React.FC<Props> = (props) => <></>;
  // export default MyComponent;
  return ["default", ...defaultComponentTypes].includes(name as string) || !name
    ? d.displayName
    : name;
}
