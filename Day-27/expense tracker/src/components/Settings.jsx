const Settings = () => {
  return (
    <section id='settings' className='space-y-8 '>
      <h1 className='text-3xl font-semibold text-gray-200'>Settings</h1>
      <div className='space-y-4'>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>
            Profile Settings
          </h3>
          <button className='mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'>
            Update Profile
          </button>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20 shadow-lg'>
          <h3 className='text-xl font-medium text-gray-300'>
            Notification Settings
          </h3>
          <button className='mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition'>
            Manage Notifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
