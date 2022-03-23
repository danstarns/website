import { API_URL } from "../config";

export interface SendContactPayload {
  email: string;
  message: string;
}

export const sendContact = async (
  payload: SendContactPayload
): Promise<void> => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }
};
