import { describe, expect, it } from "vitest";

import { WHATSAPP_URL } from "@/lib/whatsapp";

describe("WhatsApp link", () => {
  it("opens the barbershop number with the default message", () => {
    expect(WHATSAPP_URL).toBe(
      "https://wa.me/5511960687142?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es.",
    );
  });
});
