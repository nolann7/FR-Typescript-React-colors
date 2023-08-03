import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';

type HexToHSLProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const updateHSL = ({ H = h, S = s, L = l }) => {
    dispatch({
      type: 'update-hsl-color',
      payload: { hsl: [H, S, L] },
    });
  };
  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => updateHSL({ H: +e.target.value })}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => updateHSL({ S: +e.target.value })}
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) => updateHSL({ L: +e.target.value })}
      />
    </section>
  );
};

export default HexToHSL;
