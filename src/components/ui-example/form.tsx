export function Form() {
  return (
    <>
      <form className="max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>

        <div className="form-group mb-5">
          <label
            htmlFor="username-error"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="username-error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Bonnie Green"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> Username already taken!
          </p>
        </div>

        <div className="form-group mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={""}
          />
        </div>

        <div className="form-group mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your country
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>


        <div className="form-group mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Countries
          </label>

          <fieldset>
            <legend className="sr-only">Countries</legend>
            <div className="flex items-center mb-4">
              <input
                id="country-option-1"
                type="radio"
                name="countries"
                defaultValue="USA"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-1"
                className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                United States
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                defaultValue="Germany"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-2"
                className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Germany
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-3"
                type="radio"
                name="countries"
                defaultValue="Spain"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-3"
                className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Spain
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                defaultValue="United Kingdom"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-4"
                className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                United Kingdom
              </label>
            </div>
          </fieldset>
        </div>

        <div className="form-group mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            A profile picture is useful to confirm your are logged into your account
          </div>
        </div>

        <div className="form-group mb-5">
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" defaultValue="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span>
          </label>
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              defaultValue=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Checked toggle
            </span>
          </label>
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              defaultValue=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Disabled toggle
            </span>
          </label>
        </div>



        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

    </>

  )
}