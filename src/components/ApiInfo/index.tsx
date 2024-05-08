export default function ({
  endpoint,
  method,
}: {
  endpoint: string;
  method: string;
}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>终结点</td>
          <td>
            <code>/{endpoint.replace(/^\//, '')}</code>
          </td>
        </tr>
        <tr>
          <td>方法</td>
          <td>
            <code>{method.toUpperCase()}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
