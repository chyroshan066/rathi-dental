import emailjs from "@emailjs/browser";

interface Subscription extends Record<string, unknown> {
    email: string;
}

interface SubscriptionEmail extends Subscription {
    timeStamp: string;
    type: string; 
}

export const onSubscriptionSubmit = async (data: Subscription) => {
    try {
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_SUBSCRIPTION_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceID || !templateID || !userID) {
            throw new Error('Missing required environment variables for subscription');
        }

        const payload: SubscriptionEmail = {
            email: data.email,
            type: "Newsletter Subscription", 
            timeStamp: new Date().toLocaleString(),
        };

        await emailjs.send(serviceID, templateID, payload, {
            publicKey: userID
        });
    } catch (error) {
        console.error("Subscription email sending failed:", error);

        if (error instanceof Error) {
            // Handle specific EmailJS errors
            if (error.message.includes('Missing required environment variables')) {
                throw new Error('Service configuration error. Please contact support.');
            }
            // Handle network errors
            if (error.message.includes('network') || error.message.includes('fetch')) {
                throw new Error('Network error. Please check your connection and try again.');
            }
        }
        
        // Generic error for unknown issues
        throw new Error('Unable to process subscription. Please try again later.');
    }
};