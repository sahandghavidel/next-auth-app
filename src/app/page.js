export default function Home() {
  return (
    <div className='px-4 py-12 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-extrabold mb-8 text-slate-800 text-center'>
        Welcome to Our Next Auth Application
      </h1>
      <div className='bg-white p-6 rounded-lg flex flex-col items-center'>
        <img
          src='https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg'
          alt='Authentication Illustration'
          className='rounded-lg h-96 w-full object-cover mb-6'
        />
        <div>
          <p className='text-gray-700 mb-4'>
            This application is built using Next.js, a powerful React framework
            for building server-side rendered and statically generated web
            applications.
          </p>
          <p className='text-gray-700 mb-4'>
            We have integrated Clerk for seamless user authentication, providing
            a secure and user-friendly login experience.
          </p>
          <p className='text-gray-700 mb-4'>
            Our backend is powered by MongoDB, a NoSQL database, and we use
            Mongoose for elegant MongoDB object modeling in Node.js.
          </p>
          <p className='text-gray-700 mb-4'>
            This project serves as a comprehensive template for building
            full-stack web applications with authentication. Feel free to
            customize it to suit your needs!
          </p>
          <p className='text-gray-700 mb-4'>
            For more information, please refer to the official documentation of
            the technologies used:
          </p>
          <ul className='text-gray-700 mb-4 space-y-2'>
            <li>
              <a
                href='https://github.com/sahandghavidel/next-auth-app'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-blue-500 hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z' />
                </svg>
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href='https://go.clerk.com/O9JPZR5'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-blue-500 hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z' />
                </svg>
                Clerk Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}