import { Award } from "lucide-react";

const TeacherCertificates = () => {
  const certificates = [
    { id: 1, student: "Ali Hassan", course: "React Basics", date: "2025-11-10" },
    { id: 2, student: "Sara Ahmed", course: "Spring Boot", date: "2025-11-18" },
    { id: 3, student: "Omar Khaled", course: "UI/UX Design", date: "2025-12-01" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-blue-600 text-white">
          <Award size={22} />
        </div>
        <h1 className="text-2xl font-semibold">Certificates</h1>
      </div>

      <div className="overflow-x-auto rounded-xl border border-blue-100">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((c) => (
              <tr key={c.id} className="border-t hover:bg-blue-50/50">
                <td className="px-4 py-3">{c.student}</td>
                <td className="px-4 py-3">{c.course}</td>
                <td className="px-4 py-3">{c.date}</td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherCertificates;
