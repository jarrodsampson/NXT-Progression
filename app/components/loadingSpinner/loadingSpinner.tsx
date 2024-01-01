import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  const [visible, setVisible] = useState<boolean>(isLoading);

  useEffect(() => {
    setVisible(isLoading);
  }, [isLoading]);

  return (
    <>
      {visible && (
        <div
          data-cy="loading-spinner"
          className={`fixed top-0 left-0 bottom-0 right-0 flex items-center 
        justify-center opacity-90 transition-opacity duration-500 z-50`}
        >
          <BounceLoader color={"#36D7B7"} size={60} />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
