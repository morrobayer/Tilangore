'use client';

import { useState } from 'react';

export default function Intake() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed');

      const result = await res.json();
      setStatus('success');
      setMessage(result.message || 'Intake received. Check your email for next steps.');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again or email support.');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Intake received</h1>
        <p className="text-lg">{message}</p>
        <p className="mt-4 text-gray-600">You will receive a payment link and confirmation shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-2">Start your Thesis Audit</h1>
      <p className="text-gray-600 mb-8">Fixed $997 · Delivered in 5–7 business days</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Your name</label>
          <input name="name" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ecommerce idea (short description)</label>
          <textarea name="idea" required rows={4} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Target customer</label>
          <input name="customer" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">What decision are you trying to make?</label>
          <textarea name="decision" required rows={3} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Any existing evidence or links?</label>
          <textarea name="evidence" rows={3} className="w-full border rounded px-3 py-2" />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-forge-900 text-white py-3 rounded font-semibold disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit intake — $997'}
        </button>
      </form>

      {status === 'error' && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
