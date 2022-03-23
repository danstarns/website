import { Section } from "./Section";
import { API_URL } from "../config";
import { useCallback, useState } from "react";
import { FormInput } from "./FormInput";
import { subscribe } from "../api/subscribe";
import { SubmitButton } from "./SubmitButton";

export function Subscribe() {
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = useCallback(async (e) => {
    setSubmitted(true);
    e.preventDefault();

    try {
      await subscribe({
        email: e.target.elements.email.value,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitted(true);
    }
  }, []);

  return (
    <Section id="subscribe" header="Subscribe">
      <div className="container mx-auto">
        <p className="font-bold">Hey,</p>
        <p className="font-bold">Do you like my content ?</p>
        <p>Enter your email below to sign up for my mail list.</p>

        <form onSubmit={onSubmit}>
          <div className="mt-5">
            <FormInput
              id="email"
              label="Email"
              placeholder="my-email@email.com"
              disabled={isSubmitted}
              required={true}
              type="email"
            ></FormInput>
          </div>
          <div className="mt-6">
            <SubmitButton
              text={isSubmitted ? "Subscribed!" : "Subscribe"}
              disabled={isSubmitted}
            />
          </div>
          <p className="italic text-sm">
            By submitting you accept your email will only be shared with me, and
            you can unsubscribe anytime
            <a className="ml-1" href={`${API_URL}/unsubscribe`}>
              here
            </a>
            . I will use your email to occasionally email you about my content.
          </p>
        </form>
      </div>
    </Section>
  );
}
