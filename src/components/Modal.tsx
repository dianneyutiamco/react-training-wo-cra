import * as React from "react";

export interface ModalProps {
  show: boolean;
  children: React.ReactNode;
}
export const Modal = (props: ModalProps) => {
  const modalDisplay = props.show ? " show" : " hide";

  return(
    <div className={`modal ${modalDisplay}`}>
      {props.children}
    </div>
  );
}