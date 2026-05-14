export type PropRow = {
  defaultValue: string;
  name: string;
  notes: string;
  type: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="gallery-table-wrap">
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td><code>{row.name}</code></td>
              <td><code>{row.type}</code></td>
              <td><code>{row.defaultValue}</code></td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
