import LLMEval from "./component/LLMEvalComponent"; // Adjust the path as necessary

export default function Home() {
  const n = 3; // Set the number of LLM evals you want to display

  return (
    <div className="min-h-screen p-8 pb-20 flex items-center justify-center flex-wrap">
      {Array.from({ length: n }, (_, index) => (
        <LLMEval key={index} className="flex-1" />
      ))}
    </div>
  );
}
