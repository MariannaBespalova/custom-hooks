import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useOnlineStatus from "../hooks/useOnlineStatus";

function LocalStorageExample() {
  const [name, setName] = useLocalStorage("name", "Bob");
  useDocumentTitle("Hooks");
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
      <p>You are {onlineStatus ? "online" : "offline"}</p>
    </div>
  )
}

export default LocalStorageExample;