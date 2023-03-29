import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag, TagColor } from '@atlaskit/tag';
import { FC } from 'react';

interface BannerRetroProps {
  titulo: string;
  fechaInicio: string;
  idRetrospectiva: number;
  tags: {
    id: number;
    etiqueta: string;
    id_color: number;
    color: TagColor;
  }[];
}

const BannerRetro: FC<BannerRetroProps> = ({
  titulo,
  idRetrospectiva,
  fechaInicio,
  tags,
}) => {
  return (
    <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300 border-collapse justify-center">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center w-full">
          <FlagFilledIcon
            label="retrospectiva-pendiente"
            primaryColor="#8270DB"
          />
          <div>
            <h3 className="flex font-bold text-xs">{titulo}</h3>
            <p className="flex text-[0.65rem]">
              Fecha de inicio: {fechaInicio}
            </p>
          </div>
        </div>
        <div className="flex scale-[0.87]">
          {tags &&
            tags.map(
              (tag: {
                id: number;
                etiqueta: string;
                color: TagColor;
              }) => (
                <div key={tag.id} id="tag">
                  <Tag
                    text={tag.etiqueta}
                    appearance="rounded"
                    color={tag.color}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default BannerRetro;
