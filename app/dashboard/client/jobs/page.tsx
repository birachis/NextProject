import { createJob } from "./actions";

export default function CreateJobForm() {
  return (
    <form action={createJob} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Job</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input type="text" id="title" name="title" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea id="description" name="description" required className="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block text-gray-700 font-bold mb-2">Budget</label>
        <input type="text" id="budget" name="budget" required className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Job</button>
    </form>
  );
}