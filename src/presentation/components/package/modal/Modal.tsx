import React, { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { ModalProps } from "./Modal.types";
import {
  getModalSizeStyles,
  getModalPositionStyles,
  getModalAnimationClasses,
  validateModalProps,
  mergeModalStyles,
} from "./Modal.utils";

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
  position = "center",
  className = "",
  overlayClassName = "",
  contentClassName = "",
  closeOnOverlayClick = true,
  showCloseButton = true,
  closeOnEsc = true,
  animation = "fade",
  style,
  overlayStyle,
  contentStyle,
}) => {
  // Validate props
  const validation = validateModalProps({ open, onClose, children });
  if (!validation.isValid) {
    console.error("Modal validation errors:", validation.errors);
    return null;
  }

  // Handle ESC key press
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape" && open) {
        onClose();
      }
    },
    [closeOnEsc, open, onClose]
  );

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // Add/remove event listeners
  useEffect(() => {
    if (open && closeOnEsc) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, closeOnEsc, handleKeyDown]);

  // Don't render if not open
  if (!open) return null;

  // Get styles and classes
  const sizeStyles = getModalSizeStyles(size);
  const positionStyles = getModalPositionStyles(position);
  const animationClasses = getModalAnimationClasses(animation, open);

  const baseOverlayStyles: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    ...positionStyles,
  };

  const baseContentStyles: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    maxHeight: "90vh",
    ...sizeStyles,
  };

  const finalOverlayStyles = mergeModalStyles(baseOverlayStyles, overlayStyle);
  const finalContentStyles = mergeModalStyles(baseContentStyles, contentStyle);

  return (
    <div
      className={`modal-overlay ${overlayClassName} ${animationClasses}`.trim()}
      style={finalOverlayStyles}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`modal-content ${contentClassName} ${className}`.trim()}
        style={{ ...finalContentStyles, ...style }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="modal-header">
            {title && (
              <div className="modal-title">
                {typeof title === "string" ? (
                  <h2 className="text-lg font-semibold text-text-primary">
                    {title}
                  </h2>
                ) : (
                  title
                )}
              </div>
            )}
            {showCloseButton && (
              <button
                className="modal-close-button"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="modal-body">{children}</div>

        {/* Footer */}
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
