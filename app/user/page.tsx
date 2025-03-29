function UserPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-evenly bg-white shadow-lg rounded-lg h-[500px] w-[500px]">
        OytunDB
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">User Page</h1>
          <p className="text-lg">Welcome, Admin!</p>
          <p className="text-lg">You have access to all the features.</p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
