import Heading from "./Heading"

export default function Contact() {
  return (
    <section id='contact' className='scroll mb-12 h-full mt-12'>
      <Heading text='Get In Touch'/>

      <form
        noValidate
        action="https://formspree.io/f/mdoyqgwb"
        method="POST"
        target=""
        className="w-[80%] sm:w-[70%] rounded-lg shadow-lg mx-auto min-h-[200px] p-5"
      >
        <div className="flex mb-4 flex-col md:flex-row">
        <label className="flex-grow my-2">
          <span className="block text-base font-medium text-gray-700">Email</span>
          <input
            className="w-56 outline-none mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm p-2 border-gray-300 rounded-md"
            id="email"
            name="_replyto"
            type="email"
            required
            placeholder="example@gmail.com"
          />
        </label>

        <label className="flex-grow my-2">
          <span className="block text-base font-medium text-gray-700">Name</span>
          <input
            className="outline-none mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm border-gray-300 rounded-md"
            name="name"
            type="text"
            required
            placeholder="John Doe"
          />
        </label>
        </div>

        <label className="my-2">
          <span className="block text-base font-medium text-gray-700">Message</span>
          <textarea
            className='outline-none p-2 w-full min-h-[120px] mr-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:border-gray-300 rounded-md'
            name="message"
            required
            placeholder="Hey there!"
          />
        </label>

        <button
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          as="button"
          type="submit"
          value="send"
        >
          Submit
        </button>
      </form>
    </section>
  )
}