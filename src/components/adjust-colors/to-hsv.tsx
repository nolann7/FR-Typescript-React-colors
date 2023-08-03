import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';

type HexToHSVProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const HexToHSV = ({ hexColor, dispatch }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  const updateHSV = ({ H = h, S = s, V = v }) => {
    dispatch({
      type: 'update-hsv-color',
      payload: { hsv: [H, S, V] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => updateHSV({ H: +e.target.value })}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => updateHSV({ S: +e.target.value })}
      />
      <LabeledInput
        label="V"
        type="number"
        value={v}
        onChange={(e) => updateHSV({ V: +e.target.value })}
      />
    </section>
  );
};

export default HexToHSV;
