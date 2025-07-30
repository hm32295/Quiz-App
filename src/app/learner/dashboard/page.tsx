'use client';

import { FaArrowRight, FaClock, FaPlusCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function QuizDashboard() {
  return (
    <div className="p-4 md:p-8 space-y-6 flex flex-wrap">
      {/* Join Quiz */}
      <div className="flex justify-center">
        <button className="flex flex-col items-center gap-2 border border-gray-300 rounded-xl p-6 w-full max-w-xs hover:shadow-md transition">
          <FaPlusCircle size={40} className="text-gray-700" />
          <span className="text-lg font-semibold">Join Quiz</span>
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Upcoming Quizzes */}
        <div className="border rounded-xl p-4 space-y-4">
          <h2 className="text-xl font-semibold">Upcoming quizzes</h2>

          {/* Quiz Card */}
          {[
            {
              title: 'Introduction to computer programming',
              date: '12 / 03 / 2023',
              time: '09:00 AM',
              img: '/quiz1.png'
            },
            {
              title: 'Psychology 101',
              date: '27 / 03 / 2023',
              time: '12:00 PM',
              img: '/quiz2.png'
            }
          ].map((quiz, i) => (
            <div key={i} className="flex flex-col sm:flex-row flex-wrap border rounded-lg p-3 gap-4 items-center hover:shadow-sm transition">
              <div className="w-24 h-24 flex-shrink-0 bg-[#FFEDDF] rounded-[5px]">
                <Image src={quiz.img} alt="Quiz" width={96} height={96} className="rounded-md object-cover w-full h-full" />
              </div>
              <div className="flex-1 mb-3 justify-center sm:justify-start">
                <p className="mb-3 font-semibold leading-tight">{quiz.title}</p>
                <div className="text-sm text-gray-600 flex gap-4">
                  <span>{quiz.date}</span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {quiz.time}
                  </span>
                </div>
              </div>
              <div className= "cursor-pointer w-full flex justify-end text-green-700 font-semibold text-sm flex items-center gap-1">
                Open
                <FaArrowRight className="text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Completed Quizzes */}
        <div className="border rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold">Completed Quizzes</h2>
            <span className="text-sm text-gray-600 flex items-center gap-1">
              Results <FaArrowRight className="text-lime-500" />
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left table-auto border-separate border-spacing-y-0.5 border-spacing-x-0.5">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 rounded-[4px]  border-2 border-black py-2">Title</th>
                  <th className="px-4 rounded-[4px]  border-2 border-black py-2">Group name</th>
                  <th className="px-4 rounded-[4px]  border-2 border-black py-2">No. of persons in group</th>
                  <th className="px-4 rounded-[4px]  border-2 border-black py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    title: 'Assembly language',
                    group: 'Group 1',
                    count: '23 persons',
                    date: '12 / 02 / 2023'
                  },
                  {
                    title: 'C programming',
                    group: 'Group 2',
                    count: '17 persons',
                    date: '12 / 02 / 2023'
                  },
                  {
                    title: 'Python',
                    group: 'Group 3',
                    count: '38 persons',
                    date: '12 / 02 / 2023'
                  }
                ].map((row, i) => (
                  <tr key={i} >
                    <td className="px-4 rounded-[4px] border-2 border-gray-300 py-2 whitespace-nowrap">{row.title}</td>
                    <td className="px-4 rounded-[4px] border-2 border-gray-300 py-2 whitespace-nowrap">{row.group}</td>
                    <td className="px-4 rounded-[4px] border-2 border-gray-300 py-2 whitespace-nowrap">{row.count}</td>
                    <td className="px-4 rounded-[4px] border-2 border-gray-300 py-2 whitespace-nowrap">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}