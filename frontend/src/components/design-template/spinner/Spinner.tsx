import { FC } from 'react';
import { BallTriangle } from 'react-loader-spinner';

interface SpinnerProps {
  message?: string;
}

const Spinner: FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-9 py-12">
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#0055cc"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />

      <p className="text-md font-semibold text-center">{message}</p>
    </div>
  );
};

export default Spinner;
