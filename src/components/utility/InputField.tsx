"use client";

import { ReservationFormData, SubscriptionFormData } from "@/middlewares/schema";
import { memo } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
    id: keyof ReservationFormData | keyof SubscriptionFormData;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<ReservationFormData | SubscriptionFormData> | UseFormRegisterReturn;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
};

export const ErrorMessage = memo(({
    message
}: {
    message?: string
}) => {
    if (!message) return null;

    return <span style={{
        color: 'var(--gold-crayola)',
        fontSize: '0.875rem !important',
        display: 'block',
        fontFamily: 'var(--fontFamily-dm_sans)',
        marginTop: '0',
        paddingTop: '0',
        lineHeight: '1.2'
    }}>
        {message}
    </span>;
});

ErrorMessage.displayName = "ErrorMessage";

export const InputField = memo((
    {
        id,
        placeholder,
        type = "text",
        register,
        error,
        disabled,
        isTextarea = false
    }: FormFieldProps
) => {
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "date") {
            const value = e.target.value;
            if (value) {
                const [year, month, day] = value.split('-').map(Number);
                let needsCorrection = false;
                let correctedYear = year;
                let correctedMonth = month;
                let correctedDay = day;

                // Check if year has more than 4 digits and truncate to 4 digits
                if (year.toString().length > 4) {
                    correctedYear = parseInt(year.toString().substring(0, 4));
                    needsCorrection = true;
                }

                // Only correct obviously invalid months, let schema handle business logic
                if (month < 1 || month > 12) {
                    correctedMonth = Math.max(1, Math.min(12, month));
                    needsCorrection = true;
                }

                if (day < 1 || day > 31) {
                    correctedDay = Math.max(1, Math.min(32, day));
                    needsCorrection = true;
                }

                if (needsCorrection) {
                    const correctedDate = `${correctedYear.toString().padStart(4, '0')}-${correctedMonth.toString().padStart(2, '0')}-${correctedDay.toString().padStart(2, '0')}`;
                    e.target.value = correctedDate;
                    e.target.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        }

        if (typeof register === 'object' && 'onChange' in register && register.onChange) {
            register.onChange(e);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (typeof register === 'object' && 'onChange' in register && register.onChange) {
            register.onChange(e);
        }
    };

    // Add min date attribute for date inputs to prevent past dates
    const getMinDate = () => {
        if (type === "date") {
            const today = new Date();
            return today.toISOString().split('T')[0];
        }
        return undefined;
    };

    const getRegisterProps = () => {
        if (typeof register === 'function') {
            // If register is a function (UseFormRegister), call it with the field id
            return register(id);
        } else {
            // If register is already an object (UseFormRegisterReturn), return it as is
            return register;
        }
    };

    if (isTextarea) {
        const registerProps = getRegisterProps();

        return (
            <div>
                <textarea
                    {...registerProps}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="input-field"
                    disabled={disabled}
                    onChange={handleInputChange}
                    style={{
                        marginBottom: '0',
                        display: 'block',
                        width: '100%'
                    }}
                />
                <ErrorMessage message={error} />
            </div>
        );
    }

    const registerProps = getRegisterProps();

    return (
        <div>
            <input
                {...registerProps}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                className="input-field"
                onChange={type === "date" ? handleDateChange : handleInputChange}
                min={getMinDate()} // ADDED: Prevent past dates at HTML level
                disabled={disabled}
                style={{
                    marginBottom: '0',
                    display: 'block',
                    width: '100%'
                }}
            />
            <ErrorMessage message={error} />
        </div>
    );
});

InputField.displayName = "FormField";