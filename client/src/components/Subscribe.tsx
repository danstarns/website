import { Section } from "./Section";
import { API_URL } from "../config";
import { useCallback, useState } from "react";
import { FormInput } from "./FormInput";

export function Subscribe() {
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = useCallback(async (e) => {
    setSubmitted(true);
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        body: JSON.stringify({
          email: e.target.elements.email.value,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200 || !response.ok) {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitted(true);
    }
  }, []);

  return (
    <Section id="subscribe" header="Subscribe">
      <div className="container mx-auto">
        <p className="font-bold">Hey 👋, do you like my content ? </p>
        <p>Enter your email below to sign up for my mail list.</p>
        <p className="italic">
          I will occasionally email you about my content.
        </p>

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
            {isSubmitted ? "Signed Up!" : "Sign Up"}
          </button>
          <p className="italic text-sm">
            By submitting you accept that the code here will add you to a
            private google sheet, only shared with me, and you can unsubscribe
            anytime
            <a className="ml-1" href={`${API_URL}/unsubscribe`}>
              here
            </a>
            .
          </p>
        </form>
      </div>
    </Section>
  );
}
