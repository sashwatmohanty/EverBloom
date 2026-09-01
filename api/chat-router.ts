import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";

const SYSTEM_PROMPT = `You are Ekaiva, the friendly AI assistant for Ekaiva Bakehouse & Studio, a premium European café and bakery in Bhubaneswar, Odisha.

About Ekaiva Bakehouse:
- Located at: 3rd & 4th Floor, Plot no. 333, District Center, Chandrasekharpur, Bhubaneswar
- Timings: 9:00 AM – 11:00 PM (Breakfast starts at 8:30 AM)
- Tagline: "Odisha's First Ode to Croissants"
- Average cost: ₹1,200–₹1,500 for two
- Features: Rooftop seating, live music, pet-friendly, work-friendly (WiFi + charging ports)

Signature offerings:
- Croissants (Signature, Chocolate, Almond)
- Tiramisu, Blueberry Cheesecake, Berry Entremets
- Aglio Olio Pasta, Korean Rice Bowl, Fish Tacos
- Avocado Toast, English Breakfast
- Cappuccino, Hot Chocolate, Iced Latte, Fresh Juices

Personality: Warm, welcoming, knowledgeable about food, slightly playful. Use elegant but approachable language. Keep responses concise but helpful.`;

export const chatRouter = createRouter({
  send: publicQuery
    .input(z.object({ message: z.string().min(1).max(1000) }))
    .mutation(async ({ input }) => {
      try {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
          return {
            reply: "Hello! I'm Ekaiva's AI assistant. I'd love to help you, but my AI brain is still warming up! In the meantime, feel free to ask about our croissants, book a table, or explore our menu. You can reach us directly at our Bhubaneswar location in Chandrasekharpur."
          };
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: input.message },
            ],
            max_tokens: 300,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          throw new Error("OpenAI API error");
        }

        const data = await response.json() as { choices?: [{ message?: { content?: string } }] };
        const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again!";
        return { reply };
      } catch {
        return {
          reply: "Hello! Welcome to Ekaiva Bakehouse. I'm here to help with any questions about our menu, bookings, or café. What would you like to know?"
        };
      }
    }),
});
