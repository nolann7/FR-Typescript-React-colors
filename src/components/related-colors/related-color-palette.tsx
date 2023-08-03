import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: React.Dispatch<ColorActions>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch,
}: RelatedColorPaletteProps) => {
  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
              onClick={(e) =>
                dispatch({
                  type: 'update-hex-color',
                  payload: { hexColor: hexColor },
                })
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
