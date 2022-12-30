import { createPortal } from "react-dom";

export default function ModalPortals({ children }) {
  return createPortal(children, document.body);
}
