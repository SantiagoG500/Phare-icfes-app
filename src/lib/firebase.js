import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { user, isLoggedIn } from '$lib/stores';

const firebaseConfig = {
  apiKey: 'AIzaSyB9jLICABkeYXhdXSmzqsLHgh1ZUwIuYOQ',
  // authDomain: 'http://localhost:5173/main-routes/login',
  authDomain: 'phare-41833.firebaseapp.com',
  projectId: 'phare-41833',
  storageBucket: 'phare-41833.appspot.com',
  messagingSenderId: '797457053270',
  appId: '1:797457053270:web:890efcbe76d839d7236df7',
};

const app = initializeApp(firebaseConfig);

export const Database = (() => {
  const db = getFirestore(app);

  const getDocuments = async (collName = '') => {
    const colRef = collection(db, collName);
    const docQuery = query(colRef);
    const querySnapshot = (await getDocs(docQuery)).docs;

    const collections = [];
    for (const doc of querySnapshot) collections.push({ ...doc.data() });
    return collections;
  };
  const getDocument = async (collName, docName) => {
    const docRef = doc(db, collName, docName);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  };
  const getDocsId = async (collName) => {
    const colRef = collection(db, collName);
    const docQuery = query(colRef);
    const querySnapshot = (await getDocs(docQuery)).docs;

    const collections = [];
    for (const doc of querySnapshot) collections.push(doc.id);
    return collections;
  };
  const addData = async (path, docData, docName) => {
    const docRef = doc(db, path, docName);

    await setDoc(docRef, { ...docData });
  };
  const delData = async () => {};

  const updateData = async (collName, docName, data, propName) => {
    const docRef = doc(db, collName, docName);
    const examData = {};

    examData[propName] = data;
    updateDoc(docRef, { ...examData });
  };

  return {
    getDocuments,
    getDocsId,
    getDocument,
    addData,
    updateData,
    db,
  };
})();

export const Auth = (() => {
  const authInfo = getAuth(app);

  const logIn = async () => {
    const GProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(authInfo, GProvider);
    return res;
  };
  const logOut = async (e) => {
    try {
      e.preventDefault();
      await signOut(authInfo);
      isLoggedIn.set(false);
      user.set({});
    } catch (error) {
      console.error(error);
    }
  };

  return {
    authInfo,
    logIn,
    logOut,
  };
})();

export const Users = (() => {
  const addUser = async (user) => {
    const { displayName, uid, email } = user;
    const docRef = doc(Database.db, 'usuarios', uid);

    await setDoc(docRef, {
      name: displayName,
      uid,
      email,
      exams: [],
    });
  };
  const delUser = (user) => {};
  const addExamAnswers = (userId) => {};
  return {
    addUser,
    delUser,
  };
})();
export const Exam = (() => {
  const addExam = async (collName, docName, data, propName, uId) => {
    const user = await Database.getDocument('usuarios', uId);
    const { exams } = user;
    const { examName } = data;

    const foundedExam = exams.find((exam) => exam.examName === examName);

    if (!foundedExam) {
      exams.push(data);
      Database.updateData(collName, docName, exams, propName);
    } else {
      exams.splice(exams.indexOf(foundedExam), 1, data);
      Database.updateData(collName, docName, exams, propName);
    }
  };

  return { addExam };
})();
