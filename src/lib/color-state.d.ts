// type hexColorType = `#${string}`;
type hexColorType = string;

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: hexColorType;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [r: number, g: number, b: number] };
};
type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: { hsl: [h: number, s: number, l: number] };
};
type UpdateHSVColorAction = {
  type: 'update-hsv-color';
  payload: { hsv: [h: number, s: number, v: number] };
};
type UpdateCMYKColorAction = {
  type: 'update-cmyk-color';
  payload: { cmyk: [c: number, m: number, y: number, k: number] };
};

type ColorState = {
  hexColor: hexColorType;
};

type ColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction
  | UpdateHSVColorAction
  | UpdateCMYKColorAction;
