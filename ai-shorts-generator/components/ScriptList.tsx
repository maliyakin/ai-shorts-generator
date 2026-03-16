export default function ScriptList({ scripts }: any) {

  if(!scripts) return null;

  return (

    <div className="mt-8">

      <h2 className="text-xl font-bold mb-4">
        Generated Scripts
      </h2>

      <pre className="p-6 bg-gray-100 whitespace-pre-wrap">
        {scripts}
      </pre>

    </div>

  );

}
