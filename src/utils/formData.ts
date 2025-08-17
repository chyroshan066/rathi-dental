import emailjs from "@emailjs/browser";

interface Reservation extends Record<string, unknown>  {
    name: string;
    phone: string;
    person: string;
    date: string;
    time: string;
    message: string;
}

interface Email extends Reservation {
    timeStamp: string;
}

export const onSubmit = async (data: Reservation) => {
    try{
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        if (!serviceID || !templateID || !userID) {
            throw new Error('Missing required environment variables');
        }

        const payload: Email = {
            name: data.name,
            phone: data.phone,
            person: data.person,
            date: data.date,
            time: data.time,
            message: data.message,
            timeStamp: new Date().toLocaleString(),
        };

        await emailjs.send(serviceID, templateID, payload, {
            publicKey: userID
        });
    } catch(error) {
        console.error("Email sending failed:", error);
        throw error;
    }
};