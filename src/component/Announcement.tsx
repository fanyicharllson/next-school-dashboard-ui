export default function Announcement() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Annoucement</h1>
        <span className="text-xs text-gray-400 capitalize">View all</span>
      </div>
      <div className="flex-col flex gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-01-15
            </span>
          </div>
          <p className="text-gray-400 mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            praesentium!
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-01-15
            </span>
          </div>
          <p className="text-gray-400 mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            praesentium!
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-01-15
            </span>
          </div>
          <p className="text-gray-400 mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            praesentium!
          </p>
        </div>
      </div>
    </div>
  );
}
