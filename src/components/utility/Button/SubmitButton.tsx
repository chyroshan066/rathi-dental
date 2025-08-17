import { memo } from "react";

interface SubmitButtonProps {
    isButtonDisabled?: boolean;
    btnText: string;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText
}: SubmitButtonProps) => (
    <button
        type="submit"
        className="btn btn-secondary"
        disabled={isButtonDisabled}
    >
        <span className="text text-1">{btnText}</span>
        <span
            className="text text-2"
            aria-hidden="true"
        >
            {btnText}
        </span>
    </button>
));

SubmitButton.displayName = "SubmitButton";