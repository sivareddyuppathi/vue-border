
export interface Props {
  style?: Record<string, any>;
  innerPadding?: number | string;
  borderWidth?: number | string;
  borderRadius?: number | string;
  borderColor?: string;
  borderType?: string;
  topPosition?: number;
  topOffset?: number | string;
  rightPosition?: number;
  rightOffset?: number | string;
  bottomPosition?: number;
  bottomOffset?: number | string;
  leftPosition?: number;
  leftOffset?: number | string;
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
