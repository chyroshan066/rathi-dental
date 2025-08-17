"use client";

import { memo, useCallback, useEffect, useState } from "react";
import { IonIcon } from "./utility/IonIcon";

type AlertType = "success" | "error";

type AlertProps = {
    type: AlertType;
    title?: string;
    message: string;
    isVisible: boolean;
    onDismiss: () => void;
    autoDismiss?: boolean;
    autoDismissDelay?: number;
    className?: string;
}

const alertStyles = {
    success: {
        container: "bg-[var(--gold-crayola)]/10 border-l-4 border-[var(--gold-crayola)]",
        icon: "text-[var(--gold-crayola)]",
        title: "text-[var(--gold-crayola)]",
        message: "text-white/90",
        closeButton: "text-[var(--gold-crayola)] hover:text-white hover:bg-[var(--gold-crayola)]/20",
        name: "checkmark-circle-outline",
    },
    error: {
        container: "bg-[var(--smoky-black-2)] border-l-4 border-[var(--quick-silver)]",
        icon: "text-[var(--quick-silver)]",
        title: "text-white",
        message: "text-[var(--quick-silver)]",
        closeButton: "text-[var(--quick-silver)] hover:text-white hover:bg-[var(--smoky-black-1)]",
        name: "bug-outline",
    },
} as const;

export const Alert = memo(({
    type,
    title,
    message,
    isVisible,
    onDismiss,
    autoDismiss = true,
    autoDismissDelay = 5000,
    className = "",
}: AlertProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(isVisible);

    const styles = alertStyles[type];

    const handleDismiss = useCallback(() => {
        setIsAnimating(false);
        setTimeout(() => {
            onDismiss();
        }, 300);
    }, [onDismiss]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isVisible && autoDismiss) {
            timeoutId = setTimeout(() => {
                handleDismiss();
            }, autoDismissDelay);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isVisible, autoDismiss, autoDismissDelay, handleDismiss]);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div
            className={`
                fixed top-4 right-4 w-full max-w-md transform transition-all duration-300 ease-in-out z-[70]
                ${isAnimating
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }
                ${className}
            `}
            role="alert"
            aria-live="polite"
        >
            <div className={`${styles.container} h-24 px-6 flex items-center gap-4 backdrop-blur-sm`}>
                {/* Alert Icon - Increased size */}
                <div className={`${styles.icon} flex-shrink-0`}>
                    <IonIcon name={styles.name} className="text-2xl" />
                </div>

                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className={`${styles.title} font-bold text-lg uppercase tracking-wider mb-1`}>
                            {title}
                        </h4>
                    )}
                    <p className={`${styles.message} text-base leading-snug`}>
                        {message}
                    </p>
                </div>

                {/* Close button - Increased size */}
                <button
                    onClick={handleDismiss}
                    className={`${styles.closeButton} flex-shrink-0 p-1 transition-all duration-200 focus:outline-none cursor-pointer`}
                    aria-label="Dismiss alert"
                >
                    <IonIcon name="close-outline" className="text-lg" />
                </button>
            </div>

            {/* Auto-dismiss progress bar */}
            {autoDismiss && isVisible && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--black-alpha-15)] overflow-hidden">
                    <div
                        className="h-full bg-current opacity-30 origin-left"
                        style={{
                            animation: `shrink ${autoDismissDelay}ms linear forwards`,
                        }}
                    />
                </div>
            )}
        </div>
    );
});

Alert.displayName = "Alert";