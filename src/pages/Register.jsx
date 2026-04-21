import { useState } from "react";

const DASHBOARD_REGISTER =
  "https://dashboard.leadyia.com/register";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams({
      name: form.name,
      email: form.email,
      company: form.company,
    });

    window.location.href =
      `${DASHBOARD_REGISTER}?${params.toString()}`;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Criar conta LeadyIA
        </h1>

        <p className="text-white/70 mb-8">
          Ative sua IA de vendas em minutos.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Seu nome"
            onChange={handleChange}
            className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/10"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/10"
          />

          <input
            name="company"
            placeholder="Empresa"
            onChange={handleChange}
            className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/10"
          />

          <button
            className="w-full rounded-xl py-3 font-semibold bg-blue-600 hover:bg-blue-500"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}