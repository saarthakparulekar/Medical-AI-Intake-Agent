import { useState } from "react";
import API from "../api";

export default function BotForm({ onBotCreated }) {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("medical");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/bots", { name, domain });
    setName("");
    onBotCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Bot name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1">
        Create Bot
      </button>
    </form>
  );
}
