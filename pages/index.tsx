import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data'
import { BsGithub, BsGoogle } from "react-icons/bs"
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import db, { auth, GitHubProvider, GoogleProvider } from "../firebase"
import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/router';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore/lite';

const Home: NextPage = () => {

  const context: any = useContext(UserContext)
  const { userData } = context;

  const router = useRouter();


  useEffect(() => {
    auth.onAuthStateChanged(async (userData) => {
      if (userData) {
        router.push('/eggnest')
        // setUserData(DataFromFirestore)
      }
    })
    // eslint-disable-next-line
  }, [userData])

  const handleGithubAuth = async () => {
    signInWithPopup(auth, GitHubProvider).then(async (result) => {
      // credentials could be null
      const credential: any = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user: any = result.user;

      try {
        const docRef = doc(db, 'userData', user.email)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          return
        } else {
          const randomName = user.displayName.split(' ')[0] + (Math.ceil(Math.random() * 1000));

          const dataofuser = {
            username: randomName,
            email: user.email,
            phone: user.phoneNumber,
            avatar: user.photoURL,
            socials: 0,
            links: 0
          }
          localStorage.setItem('userEmail', user.email)

          const userRef = collection(db, "userData");
          await setDoc(doc(userRef, user.email), dataofuser)
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ": " + errorMessage)

        const email = error.customData.email;

        const credential = GithubAuthProvider.credentialFromError(error);
      });
  }
  const handleGoogleAuth = async () => {
    signInWithPopup(auth, GoogleProvider).then(async (result) => {

      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user: any = result.user;

      localStorage.setItem('userEmail', user.email)
      try {
        const docRef = doc(db, 'userData', user.email)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          return
        } else {
          const randomName = user.displayName.split(' ')[0] + (Math.ceil(Math.random() * 1000));

          const dataofuser = {
            username: randomName,
            email: user.email,
            phone: user.phoneNumber,
            avatar: user.photoURL,
            socials: 0,
            links: 0
          }

          const userRef = collection(db, "userData");
          await setDoc(doc(userRef, user.email), dataofuser)
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ": " + errorMessage)

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
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
      <p className='w-2/4 text-center hidden md:block'>I decided to build a <a className='text-green-300 hover:underline decoration-yellow-200' href="https://linktr.ee">linktr.ee</a> clone, but I also wanted to do something new, so this is what I built as a clone.</p>

      <div id="authenticate" className="flex flex-col items-center justify-center bg-gray-700 rounded-lg shadow-lg py-8 px-10 my-5">
        <h2>Authenticate your <span className='text-green-300'>Account</span></h2>

        <div onClick={handleGithubAuth} className='text-center flex items-center justify-center space-x-2 text-yellow-100 bg-gray-800 mt-3 cursor-pointer hover:text-green-300 hover:underline decoration-yellow-200 py-3 px-4'>
          <BsGithub />
          <p>Continue with GitHub</p>
        </div>
        <div onClick={handleGoogleAuth} className='text-center flex items-center justify-center space-x-2 text-yellow-100 bg-gray-800 mt-3 cursor-pointer hover:text-green-300 hover:underline decoration-yellow-200 py-3 px-4'>
          <BsGoogle />
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
  )
}

export default Home
