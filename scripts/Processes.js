import { app } from "./Backend";
import { doc, setDoc } from "firebase/firestore";

const db = getFirestore(app)

const Post = async () => {
    await setDoc(doc(db, "users", "me"), {name: "Ruth"});
}

Post()