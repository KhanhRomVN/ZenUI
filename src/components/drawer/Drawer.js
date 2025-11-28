import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getDrawerVariants, getDrawerStyle, overlayVariants, headerVariants, } from "./Drawer.utils";
const Drawer = ({ isOpen, onClose, title, subtitle, direction = "right", children, headerActions, footerActions, className = "", overlayOpacity = 0.5, hideHeader = false, animationType = "slide", enableBlur = false, closeOnOverlayClick = true, showCloseButton = true, width, height, marginLeft = 0, marginRight = 0, marginTop = 0, marginBottom = 0, 
// New props
padding, margin, border, shadow, opacity, backdropBlur, backgroundColor, 
// Section-specific styling
headerBackgroundColor, bodyBackgroundColor, footerBackgroundColor, headerBorder, footerBorder, }) => {
    const drawerVariants = getDrawerVariants(direction, animationType);
    const drawerStyle = getDrawerStyle(direction, width, height, marginLeft, marginRight, marginTop, marginBottom, padding, margin, border, shadow, opacity, backdropBlur, backgroundColor);
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: "hidden", animate: "visible", exit: "hidden", variants: overlayVariants, transition: { duration: 0.3 }, onClick: closeOnOverlayClick ? onClose : undefined, style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                        backdropFilter: enableBlur ? "blur(4px)" : "none",
                        WebkitBackdropFilter: enableBlur ? "blur(4px)" : "none",
                        zIndex: 999,
                    } }), _jsxs(motion.div, { initial: "hidden", animate: "visible", exit: "hidden", variants: drawerVariants, transition: { duration: 0.3, ease: "easeInOut" }, style: drawerStyle, className: className, children: [!hideHeader && (_jsxs(motion.div, { initial: "hidden", animate: "visible", variants: headerVariants, style: {
                                padding: "1.5rem",
                                borderBottom: headerBorder?.width
                                    ? `${typeof headerBorder.width === "number"
                                        ? `${headerBorder.width}px`
                                        : headerBorder.width} ${headerBorder.style || "solid"} ${headerBorder.color || "#e5e7eb"}`
                                    : "1px solid #e5e7eb",
                                boxShadow: headerBorder?.shadow
                                    ? `${headerBorder.shadow.offsetX || 0} ${headerBorder.shadow.offsetY || 0} ${headerBorder.shadow.blur || 0} ${headerBorder.shadow.spread || 0} ${headerBorder.shadow.color || "rgba(0,0,0,0.1)"}`
                                    : "none",
                                backgroundColor: headerBackgroundColor || "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexShrink: 0,
                            }, children: [_jsxs("div", { style: { flex: 1 }, children: [title && (_jsx("h2", { style: {
                                                margin: 0,
                                                fontSize: "1.25rem",
                                                fontWeight: 600,
                                                color: "#111827",
                                            }, children: title })), subtitle && (_jsx("p", { style: {
                                                margin: "0.25rem 0 0 0",
                                                fontSize: "0.875rem",
                                                color: "#6b7280",
                                            }, children: subtitle }))] }), _jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }, children: [headerActions, showCloseButton && (_jsx("button", { onClick: onClose, style: {
                                                padding: "0.5rem",
                                                border: "none",
                                                background: "transparent",
                                                cursor: "pointer",
                                                borderRadius: "0.375rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "background-color 0.2s",
                                            }, onMouseEnter: (e) => {
                                                e.currentTarget.style.backgroundColor = "#f3f4f6";
                                            }, onMouseLeave: (e) => {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }, children: _jsx(X, { size: 20, color: "#6b7280" }) }))] })] })), _jsx("div", { style: {
                                flex: 1,
                                overflowY: "auto",
                                backgroundColor: bodyBackgroundColor || "transparent",
                            }, children: children }), footerActions && (_jsx("div", { style: {
                                padding: "1rem 1.5rem",
                                borderTop: footerBorder?.width
                                    ? `${typeof footerBorder.width === "number"
                                        ? `${footerBorder.width}px`
                                        : footerBorder.width} ${footerBorder.style || "solid"} ${footerBorder.color || "#e5e7eb"}`
                                    : "1px solid #e5e7eb",
                                boxShadow: footerBorder?.shadow
                                    ? `${footerBorder.shadow.offsetX || 0} ${footerBorder.shadow.offsetY || 0} ${footerBorder.shadow.blur || 0} ${footerBorder.shadow.spread || 0} ${footerBorder.shadow.color || "rgba(0,0,0,0.1)"}`
                                    : "none",
                                backgroundColor: footerBackgroundColor || "transparent",
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "0.75rem",
                                flexShrink: 0,
                            }, children: footerActions }))] })] })) }));
};
export default Drawer;
