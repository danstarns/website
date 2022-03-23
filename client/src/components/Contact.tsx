import { Section } from "./Section";
import { useCallback, useState } from "react";
import { FormInput } from "./FormInput";
import { sendContact, SendContactPayload } from "../api/send-contact";
import { SubmitButton } from "./SubmitButton";

export function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = useCallback(async (e) => {
    setSubmitted(true);
    setError("");
    e.preventDefault();

    try {
      const payload: SendContactPayload = {
        email: e.target.elements.from.value,
        message: e.target.elements.message.value,
      };

      await sendContact(payload);
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    }
  }, []);

  return (
    <Section id="contact" header="Contact">
      <div className="container mx-auto">
        {error && <p>Something went wrong! Try emailing direct.</p>}
        {!error && (
          <form onSubmit={onSubmit}>
            <div className="mt-5">
              <FormInput
                id="to"
                label="To"
                placeholder="me@danielstarns.com"
                disabled={true}
                required={false}
                type="email"
              ></FormInput>
            </div>
            <div className="mt-5">
              <FormInput
                id="from"
                label="From"
                placeholder="my-email@email.com"
                disabled={isSubmitted}
                required={true}
                type="email"
              ></FormInput>
            </div>
            <div className="mt-5">
              <FormInput
                id="message"
                label="Your Message"
                placeholder="Hey Dan, Let's chat ?"
                disabled={isSubmitted}
                required={false}
                type="text"
                textArea={true}
              ></FormInput>
            </div>
            <div className="mt-6">
              <SubmitButton
                text={isSubmitted ? "Sent!" : "Send"}
                disabled={isSubmitted}
              />
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
