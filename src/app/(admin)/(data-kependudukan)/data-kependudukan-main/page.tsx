export default function DataKependudukanMainPage() {
  return (
    <div className="mt-12 ml-3">
      {/* Header Section */}
      <div className="flex mb-3">
        <h1 className="font-bold text-3xl">Data Kependudukan</h1>
      </div>
      <div className="flex justify-between items-center mb-5">
        <div className="ml-auto">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 text-white font-bold flex items-center transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-16" /><col className="w-48" /><col className="w-96" /><col className="w-96" /><col className="w-48" /><col className="w-40" />
          </colgroup>
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-400 px-4 py-3 text-center font-semibold">No.</th>
              <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Nama Lengkap</th>
              <th className="border border-gray-400 px-4 py-3 text-left font-semibold">NIK</th>
              <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Jenis Kelamin</th>
              <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Tempat Tanggal Lahir</th>
              <th className="border border-gray-400 px-4 py-3 text-center font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200 transition-colors duration-200">
              <td className="border border-gray-400 px-4 py-3 text-center">1</td>
              <td className="border border-gray-400 px-4 py-3 break-words">
                Lorem Ipsum.jpg
              </td>
              <td className="border border-gray-400 px-4 py-3 break-words">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </td>
              <td className="border border-gray-400 px-4 py-3 break-words">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aspernatur nam cupiditate.
              </td>
              <td className="border border-gray-400 px-4 py-3">2025-01-01</td>
              <td className="border border-gray-400 px-4 py-3">
                <div className="flex justify-center space-x-2">
                  <button className="flex items-center rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H7v-3a2 2 0 01.586-1.414z" />
                    </svg>
                    Ubah
                  </button>
                  <button className="flex items-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}