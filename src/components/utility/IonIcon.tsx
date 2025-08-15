"use client";

import React, { useEffect, useRef } from 'react';

interface IonIconProps {
    name?: string;
    'aria-hidden'?: boolean | 'true' | 'false';
    className?: string;
    size?: 'small' | 'large' | string;
    color?: string;
    src?: string;
    icon?: string;
    ios?: string;
    md?: string;
    flipRtl?: boolean;
    lazy?: boolean;
    sanitize?: boolean;
    mode?: 'ios' | 'md';
    onClick?: () => void;
}

export const IonIcon: React.FC<IonIconProps> = (props) => {
    const ionIconRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ionIconRef.current) {
            // Set all props on the ion-icon element
            Object.entries(props).forEach(([key, value]) => {
                if (key !== 'onClick' && value !== undefined) {
                    ionIconRef.current?.setAttribute(key, value.toString());
                }
            });
        }
    }, [props]);

    return React.createElement('ion-icon', {
        ...props,
        ref: ionIconRef,
    });
};