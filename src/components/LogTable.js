export default function LogTable({ logs }) {
  return (
    <table className="border w-full">
      <thead>
        <tr>
          <th className="border px-2">Time</th>
          <th className="border px-2">Type</th>
          <th className="border px-2">Details</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id}>
            <td className="border px-2">{new Date(log.timestamp).toLocaleString()}</td>
            <td className="border px-2">{log.type}</td>
            <td className="border px-2">
              <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(log.details, null, 2)}</pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
