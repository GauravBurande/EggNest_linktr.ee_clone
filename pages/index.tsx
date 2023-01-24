import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data'
import { BsGithub } from "react-icons/bs"
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase"

const Home: NextPage = () => {

  const handleAuth = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // credential could be null !!!!
        const credential: any = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log("user: ", user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ": " + errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;

        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div id="profileCard" className="flex justify-center items-center flex-col">
        <div className='w-[100px] h-[100px] mt-10 md:mt-24'>
          <Image
            src={data.avatar}
            className="rounded-full object-cover w-full h-full"
            width={100}
            height={100}
            alt={data.username}
          />
        </div>

        <div>
          <h3 className='text-xl font-bold py-5'>@{data.username}</h3>
        </div>
      </div>

      <h2 className='text-5xl font-bold pb-5 text-center'>Welcome to <span className='text-green-300 underline decoration-yellow-200 '>EggNest</span></h2>
      <p className='w-2/4 text-center'>I decided to build a <a className='text-green-300 hover:underline decoration-yellow-200' href="https://linktr.ee">linktr.ee</a> clone, but I also wanted to do something new, so this is what I built as a clone.</p>

      <div id="authenticate" className="flex flex-col bg-gray-700 rounded-lg shadow-lg p-8 my-5">
        <h2>Create <span className='text-green-300'>Nest</span> with your <span className='text-green-300'>GitHub</span> account</h2>

        <div onClick={handleAuth} className='text-center flex items-center justify-center space-x-2 text-yellow-100 bg-gray-800 mt-3 cursor-pointer hover:text-green-300 hover:underline decoration-yellow-200 py-3'>
          <BsGithub />
          <p>Continue with GitHub</p>
        </div>
      </div>
    </div>
  )
}

export default Home
