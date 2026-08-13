'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: assistantText },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again or contact our team directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-[var(--color-neutral-200)] flex flex-col overflow-hidden">
          <div className="bg-[var(--color-primary-900)] text-white px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">Federal Title Assistant</p>
              <p className="text-white/60 text-xs">Ask about fees, closing, or the process</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="h-5 w-5 text-white/80" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--color-neutral-50)]">
            {messages.length === 0 && (
              <p className="text-sm text-[var(--color-neutral-500)]">
                Hi! Ask me about seller or buyer fees, remote closing, or what to expect during your closing.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-4 py-2 text-sm ${
                  m.role === 'user'
                    ? 'ml-auto bg-[var(--color-accent-600)] text-white'
                    : 'bg-white border border-[var(--color-neutral-200)] text-[var(--color-neutral-700)]'
                }`}
              >
                {m.content || (loading && i === messages.length - 1 ? '…' : '')}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--color-neutral-200)] p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a question…"
              className="flex-1 rounded-lg border border-[var(--color-neutral-200)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="h-9 w-9 shrink-0 rounded-lg bg-[var(--color-accent-600)] text-white flex items-center justify-center disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full bg-[var(--color-primary-900)] text-white shadow-xl flex items-center justify-center hover:bg-[var(--color-primary-700)] transition-colors"
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
