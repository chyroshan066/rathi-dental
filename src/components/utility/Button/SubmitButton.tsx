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
        className="btn"
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";