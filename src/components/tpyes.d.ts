/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
// declare module '*.css' {
//   const content: { [className: string]: string };
//   export default content;
// }

// declare module '*.svg' {
//   const svgUrl: string;
//   const svgComponent: SvgrComponent;
//   export default svgUrl;
//   export { svgComponent as Component }
// }

export interface Props {
  style?: Record<string, any>;
  innerPadding?: number | string;
  borderWidth?: number | string;
  borderRadius?: number | string;
  borderColor?: string;
  borderType?: string;

  topElement?: any;
  topPosition?: number;
  topOffset?: number | string;

  rightElement?: any;
  rightPosition?: number;
  rightOffset?: number | string;
  rightGap?: number | string;

  bottomElement?: any;
  bottomPosition?: number;
  bottomOffset?: number | string;
  bottomGap?: number | string;

  leftElement?: any;
  leftPosition?: number;
  leftOffset?: number | string;
  leftGap?: number | string;
}

export type Positions = {
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean
}

export type PositionPercent = {
  primary?: string;
  secondary?: string;
}

export type valueType = number | string | undefined
