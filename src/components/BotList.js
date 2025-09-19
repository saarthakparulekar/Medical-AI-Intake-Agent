import API from "../api";

export default function BotList({ bots, refresh }) {
  const handleDelete = async (id) => {
    await API.delete(`/bots/${id}`);
    refresh();
  };

  return (
    <div>
      <h3 className="text-lg mb-2">Existing Bots</h3>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id} className="mb-2">
            <span>{bot.name} ({bot.domain}) - UID: {bot.uid}</span>
            <button
              onClick={() => handleDelete(bot.id)}
              className="bg-red-500 text-white px-2 py-1 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
