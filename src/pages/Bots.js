import { useEffect, useState } from "react";
import API from "../api";
import BotForm from "../components/BotForm";
import BotList from "../components/BotList";

export default function Bots() {
  const [bots, setBots] = useState([]);

  const fetchBots = async () => {
    const res = await API.get("/bots");
    setBots(res.data);
  };

  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Bot Management</h2>
      <BotForm onBotCreated={fetchBots} />
      <BotList bots={bots} refresh={fetchBots} />
    </div>
  );
}
