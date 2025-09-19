import { useEffect, useState } from "react";
import API from "../api";
import LogTable from "../components/LogTable";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const res = await API.get("/logs");
    setLogs(res.data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Call Logs</h2>
      <LogTable logs={logs} />
    </div>
  );
}
