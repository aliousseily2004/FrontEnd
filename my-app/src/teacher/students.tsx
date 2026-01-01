import { Users } from "lucide-react";

const TeacherStudents = () => {
  const students = [
    { id: 1, name: "Ali Hassan", email: "ali@mail.com", course: "React Basics" },
    { id: 2, name: "Sara Ahmed", email: "sara@mail.com", course: "Spring Boot" },
    { id: 3, name: "Omar Khaled", email: "omar@mail.com", course: "UI/UX Design" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-blue-600 text-white">
          <Users size={22} />
        </div>
        <h1 className="text-2xl font-semibold">Students</h1>
      </div>

      <div className="overflow-x-auto rounded-xl border border-blue-100">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t hover:bg-blue-50/50">
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.email}</td>
                <td className="px-4 py-3">{s.course}</td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherStudents;