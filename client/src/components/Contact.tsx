import { Section } from "./Section";
import { API_URL } from "../config";
import { useCallback, useState } from "react";
import { FormInput } from "./FormInput";

export function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = useCallback(async (e) => {
    setSubmitted(true);
    setError("");
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          email: e.target.elements.from.value,
          message: e.target.elements.message.value,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200 || !response.ok) {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    }
  }, []);

  return (
    <Section id="contact" header="Contact">
      <ul>
        <li>
          <a href="mailto:me@danielstarns.com">me@danielstarns.com</a>
        </li>
      </ul>
      <div className="container mx-auto px-4">
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
            <button
              className="
                mt-6 
                bg-black 
                hover:bg-lightgrey 
                text-white 
                hover:text-black 
                border
                border-white 
                hover:border-black 
                font-bold 
                py-2 
                px-4 
                rounded 
                focus:bg-lightgrey 
                focus:text-black"
              type="submit"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Sent!" : "Send"}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
