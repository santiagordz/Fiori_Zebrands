import { FC, useEffect, useState, useContext } from 'react';
import { type FlagType, FlagContext } from './FlagContext';
import { motion } from 'framer-motion';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import { GlyphProps } from '@atlaskit/icon';
import LightbulbIcon from '@atlaskit/icon/glyph/lightbulb';

interface FlagProps extends FlagType {
  onDismiss: () => void;
}

const Flag: FC<FlagProps> = ({
  title,
  icon,
  appearance,
  description,
  onDismiss,
}) => {
  const appearanceClasses = {
    error: 'bg-[#faf0f0] border-[#d26565]',
    info: 'bg-[#f0f1fa] border-[#657dd2]',
    success: 'bg-[#f0faf8] border-[#66d2a9]',
    warning: 'bg-[#faf8f0] border-[#d2bc65]',
    normal: 'bg-[#f4f0fa] border-[#8265d2]',
  };

  const progressClasses = {
    error: 'bg-[#d26565]',
    info: 'bg-[#657dd2]',
    success: 'bg-[#66d2a9]',
    warning: 'bg-[#d2bc65]',
    normal: 'bg-[#8265d2]',
  };

  const primaryColorClasses = {
    error: '#cf4f4f',
    info: '#4f5ecf',
    success: '#4fcf9e',
    warning: '#cfb54f',
    normal: '#7e4fcf',
  };

  const titleClasses = {
    error: 'text-[#a60808]',
    info: 'text-[#081fa6]',
    success: 'text-[#08a67c]',
    warning: 'text-[#a67e08]',
    normal: 'text-[#2d08a6]',
  };

  const chevronClasses = {
    error: '#a60808',
    info: '#081fa6',
    success: '#08a67c',
    warning: '#a67e08',
    normal: '#2d08a6',
  };

  const Icon: React.ComponentType<GlyphProps> = icon || LightbulbIcon;

  const [progress, setProgress] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] =
    useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleDescriptionToggle = (e: React.MouseEvent) => {
    if (!description) return;
    e.stopPropagation();
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000);

    if (progress === 110) {
      setIsVisible(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress, onDismiss]);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        onDismiss();
      }, 500);
    }
  }, [isVisible, onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const flagVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={flagVariants}
      initial={'hidden'}
      animate={isVisible ? 'visible' : 'hidden'}
      className={`w-fit px-5 py-4 mb-6 rounded-lg shadow-lg relative
        border overflow-hidden
        ${appearanceClasses[appearance]}
        text-white
      `}
    >
      <div className="flex justify-between text-left w-full">
        <span className="flex items-baseline gap-5">
          <span className="flex items-center justify-center">
            <Icon
              label="helper"
              primaryColor={primaryColorClasses[appearance]}
              secondaryColor="white"
              size="small"
            />
          </span>
          <button
            type="button"
            className="flex items-center justify-center pr-4"
            onClick={handleDescriptionToggle}
          >
            <h3
              className={`font-semibold text-sm ${titleClasses[appearance]} text-left`}
            >
              {title}
            </h3>
            {description && (
              <span
                className={`flex items-center justify-center ${
                  isDescriptionVisible ? 'transform rotate-180' : ''
                }`}
              >
                <ChevronDownIcon
                  label="expand"
                  primaryColor={chevronClasses[appearance]}
                />
              </span>
            )}
          </button>
        </span>

        <button
          className="flex items-center justify-center"
          type="button"
          onClick={handleDismiss}
        >
          <CrossIcon
            label="close flag"
            primaryColor={primaryColorClasses[appearance]}
            size="small"
          />
        </button>
      </div>
      {isDescriptionVisible && description && (
        <div className="mt-2 ml-9 text-xs mb-1">
          <p className={titleClasses[appearance]}>{description}</p>
        </div>
      )}
      <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-20 w-full">
        <div
          className={`h-1 ${progressClasses[appearance]}`}
          style={{
            width: `${progress}%`,
            transition: 'width 1000ms linear',
          }}
        />
      </div>
    </motion.div>
  );
};

const FlagContainer: FC = () => {
  const { flags, removeFlag } = useContext(FlagContext);

  const maxHeight = 20;
  const flagHeight = 10;
  const maxVisibleFlags = Math.floor(maxHeight / flagHeight);
  const visibleFlags = flags.slice(-maxVisibleFlags);

  return (
    <div
      className={`fixed top-10 w-full pl-[4vw] flex items-center justify-center z-[1000000000000000000000] pb-4 pr-16 flex-col-reverse max-h-[${maxHeight}vh]`}
    >
      {visibleFlags.map((flag) => (
        <Flag
          key={flag.id}
          id={flag.id}
          title={flag.title}
          icon={flag.icon}
          appearance={flag.appearance}
          description={flag.description}
          onDismiss={() => removeFlag(flag.id)}
        />
      ))}
    </div>
  );
};

export default FlagContainer;
