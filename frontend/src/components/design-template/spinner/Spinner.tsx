import { FC, memo } from 'react';
import { Circles } from 'react-loader-spinner';

interface SpinnerProps {
  message?: string;
  height?: string;
  gap?: number;
}

const Spinner: FC<SpinnerProps> = ({
  message,
  height = '50%',
  gap = 1,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full gap-${gap} py-12`}
    >
      <Circles
        height={height}
        width={100}
        color="#0055cc"
        ariaLabel="loading"
        visible={true}
      />

      <p className="text-md font-semibold text-center text-slate-600">
        {message}
      </p>
    </div>
  );
};

export default memo(Spinner);
