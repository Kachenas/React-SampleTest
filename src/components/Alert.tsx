import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    // <div className="alert alert-primary alert-dismissible" role="alert">
    //   {children}
    //   <button
    //     type="button"
    //     className="close"
    //     data-db-dismiss="alert"
    //     aria-label="Close"
    //   >
    //     <span aria-hidden="true">&times;</span>
    //   </button>
    // </div>
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
