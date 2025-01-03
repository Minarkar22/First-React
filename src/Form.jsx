import { useRef } from "react";
import { useContext} from "react";
import { AppContext } from "./ThemedApp";

export default function Form ({ add }) {
    const { mode } = useContext(AppContext);
    const contentRef = useRef();
    const nameRef = useRef();
    return (
        <form 
        onSubmit={e => {
            e.preventDefault();
            const content = contentRef.current.value;
            const name = nameRef.current.value;

            add (content, name);

            e.currentTarget.reset();
        }}
        className="flex flex-col p-[10px] gap-3 mb-4 rounded-xl"
        style={{background: mode === "dark" ? "#555" : "#def"}}> 
            <input ref={contentRef} type="text" placeholder="Content" className="p-3 bg-blue-50 text-black"/>
            <input ref={nameRef} type="text" placeholder="Name" className="p-3 bg-blue-50 text-black"/>
            <button type="submit" className="p-2 bg-blue-600 text-white border-2 rounded-2xl">
                Post
            </button>
        </form>
    )
}