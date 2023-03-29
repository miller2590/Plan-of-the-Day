import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import { query, onSnapshot, collection } from "firebase/firestore";

function useDashboardState() {
  const [projects, setProjects] = useState([]);
  const { currentUser } = useAuth();

  const todoRef = useMemo(() => {
    if (currentUser) {
      return query(collection(db, "users", currentUser.uid, "projects"));
    } else {
      return null;
    }
  }, [currentUser]);

  useEffect(() => {
    if (todoRef) {
      const unsub = onSnapshot(todoRef, (querySnap) => {
        const docIdRef = [];
        querySnap.forEach((doc) => {
          // Project card Object
          docIdRef.push({ id: doc.id, title: doc.data().title });
        });
        setProjects(docIdRef);
      });

      return () => {
        unsub();
      };
    }
  }, [todoRef]);

  return [projects];
}

export default useDashboardState;
