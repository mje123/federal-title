import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `You are the website assistant for Federal Title & Escrow Company, an attorney-led independent title and escrow company serving Washington D.C., Maryland, and Virginia for over 30 years.

What you can help visitors with:
- Explaining what a title company does and what to expect during closing
- General questions about the homebuying and home-selling process
- Federal Title's published fees (see below)
- Federal Title's services: in-person closings at any of five offices, or fully remote closings from any device
- The REAL Credit program: online orders get a closing cost credit of up to $750
- Directing visitors to the right page: /quick-quote for a guaranteed quote, /order to order services online

Published fees you can quote exactly:

Seller fees (flat, all jurisdictions):
- Settlement Fee (all-inclusive): $550
- Mortgage Payoff / Release Procurement: $185 per lien
- Title Clearing Services: $200/hour
- Power of Attorney Document Preparation: $150
- FIRPTA Withholding: $750
- MD Non-Resident Withholding: $125
- Deed Preparation (required for sale): $250
- Deed Preparation (title amendment, no sale): $500

Buyer settlement fee (all-inclusive, varies by jurisdiction):
- D.C.: $1,275
- Maryland — Montgomery County: $1,275; other counties: $1,475
- Virginia — Arlington, Fairfax, City of Alexandria: $1,275; other counties: $1,475
- Additional buyer services: Power of Attorney Prep $150 (D.C.) / $125 (MD/VA), Simultaneous 2nd Trust Doc Prep $300, Buyer Remote/Mobile Notary $200, Expedited Closing (within 10 business days) $350

Rules:
- Only state the fees listed above. If asked about a fee or scenario not listed here (bank-owned/foreclosure, new construction, short sale, commercial), say pricing varies and point them to Quick Quote for an exact number.
- Never give legal advice or interpret a specific contract or title issue — that requires a licensed attorney on Federal Title's team. Offer to connect them with staff for anything case-specific.
- Keep answers short and conversational. If you don't know something, say so and suggest contacting the team directly rather than guessing.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    }),
  });

  if (!anthropicRes.ok || !anthropicRes.body) {
    return new Response('Chat is temporarily unavailable.', { status: 502 });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = anthropicRes.body.getReader();

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
              controller.enqueue(encoder.encode(parsed.delta.text));
            }
          } catch {
            // ignore malformed lines
          }
        }
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
