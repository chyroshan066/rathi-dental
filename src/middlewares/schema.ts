import z from "zod";

export const ReservationFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required").regex(/^[\d\s+-]+$/, "Enter valid number"),
    gender: z.string().min(1, "Select your Gender"),
    date: z.string()
    .min(1, "Date is required")
    .refine((dateString) => {
        // Check if date string is in correct format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateString)) {
          return false;
        }

        const [year, month, day] = dateString.split('-').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (day < 1 || day > 31) {
          return false;
        }

        if (month < 1 || month > 12) {
          return false;
        }

        if (year < currentYear || year > currentYear + 1) {
          return false;
        }

        // If it's current year, ensure date is not in the past
        if (year === currentYear) {
          const selectedDate = new Date(year, month - 1, day);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Reset time to compare only dates
          
          if (selectedDate < today) {
            return false;
          }
        }

        // Validate actual date (handles leap years, month lengths, etc.)
        const testDate = new Date(year, month - 1, day);
        if (testDate.getFullYear() !== year || 
            testDate.getMonth() !== month - 1 || 
            testDate.getDate() !== day) {
          return false;
        }

        return true;
      }, {
        message: "Please select a valid date."
    }),
    time: z.string().min(1, "Time is required"),
    message: z.string().min(1, "Message is required"),
});

export type ReservationFormData = z.infer<typeof ReservationFormSchema>;

export const SubscriptionFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

export type SubscriptionFormData = z.infer<typeof SubscriptionFormSchema>;