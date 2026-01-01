import { ClipboardList } from "lucide-react";

const TeacherQuizzes = () => {
  const quizzes = [
    { id: 1, title: "React Basics Quiz", course: "React Basics", questions: 15, status: "Published" },
    { id: 2, title: "Spring Boot Final", course: "Spring Boot", questions: 20, status: "Draft" },
    { id: 3, title: "UI/UX Fundamentals", course: "UI/UX Design", questions: 10, status: "Published" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-blue-600 text-white">
          <ClipboardList size={22} />
        </div>
        <h1 className="text-2xl font-semibold">Quizzes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((q) => (
          <div key={q.id} className="p-5 rounded-2xl border border-blue-100 bg-white">
            <h3 className="text-lg font-semibold mb-1">{q.title}</h3>
            <p className="text-sm text-gray-500">Course: {q.course}</p>
            <p className="text-sm text-gray-500">Questions: {q.questions}</p>

            <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${q.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
              {q.status}
            </span>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white">Edit</button>
              <button className="flex-1 py-2 rounded-lg border border-blue-600 text-blue-600">Results</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherQuizzes;
