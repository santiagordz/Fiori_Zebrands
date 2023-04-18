import { FC } from 'react';
import { Circles } from 'react-loader-spinner';

interface SpinnerProps {
  message?: string;
  height?: string;
}

const Spinner: FC<SpinnerProps> = ({ message, height }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-1 py-12">
      <div className="flex flex-col justify-center items-center">
        <Circles
          height={height || '50%'}
          width={100}
          color="#0055cc"
          ariaLabel="loading"
          visible={true}
        />
      </div>

      <p className="text-md font-semibold text-center">{message}</p>
    </div>
  );
};

export default Spinner;
