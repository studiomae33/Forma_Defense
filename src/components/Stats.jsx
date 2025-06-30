import { FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa'
import { PiStudentFill } from 'react-icons/pi'
import { MdLocationOn } from 'react-icons/md'

export function Stats() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-white border-y border-slate-100">
      <div className="flex flex-col items-center justify-center py-8 border-b sm:border-b-0 sm:border-r border-slate-100">
        <FaShieldAlt className="text-blue-600 text-3xl mb-2" />
        <div className="text-xl font-bold text-blue-900">1</div>
        <div className="text-sm text-slate-600">Formations</div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 border-b sm:border-b-0 sm:border-r border-slate-100">
        <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-2" />
        <div className="text-xl font-bold text-yellow-700">1</div>
        <div className="text-sm text-slate-600">Formateurs</div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 border-b lg:border-b-0 lg:border-r border-slate-100">
        <PiStudentFill className="text-violet-600 text-3xl mb-2" />
        <div className="text-xl font-bold text-violet-700">1</div>
        <div className="text-sm text-slate-600">Étudiants</div>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <MdLocationOn className="text-cyan-500 text-3xl mb-2" />
        <div className="text-xl font-bold text-cyan-700">1</div>
        <div className="text-sm text-slate-600">Villes</div>
      </div>
    </div>
  )
}
