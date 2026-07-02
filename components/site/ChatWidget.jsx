'use client';

import { useRef, useState } from 'react';
import { getFaqAnswer, FAQ_SUGGESTIONS } from '@/lib/faq';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Halo! Aku asisten FAQ portofolio ini. Tanya soal skill, proyek, pendidikan, atau kontak.',
    },
  ]);
  const listRef = useRef(null);

  function send(text) {
    const question = text.trim();
    if (!question) return;
    const answer = getFaqAnswer(question);
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: question },
      { role: 'bot', text: answer },
    ]);
    setInput('');
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    });
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <span>{'// faq.bot'}</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Tutup chat">
              ✕
            </button>
          </div>
          <div className="chat-messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="chat-suggestions">
            {FAQ_SUGGESTIONS.map((s) => (
              <button key={s} type="button" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaan..."
            />
            <button type="submit">Kirim</button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chat-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka chat FAQ"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}
