import { API_URL } from "../config";

export interface SubscribePayload {
  email: string;
}

export const subscribe = async (payload: SubscribePayload): Promise<void> => {
  const response = await fetch(`${API_URL}/api/subscribe`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }
};
