import {useRef} from "react";

export default function Form({ add }) {
    const contentRef = useRef();
    const nameRef = useRef();
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const content = contentRef.current.value;
                const name = nameRef.current.value;

                add(content, name);
                e.currentTarget.reset();
            }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            borderRadius: 5,
            padding: 8,
            marginBottom: 15,
            backqround: "gray",
        }}>
            <input type="text" placeholder="Content" ref={contentRef} style={{padding:10}}/>
            <input type="text" placeholder="Name" ref={nameRef} style={{padding:10}}/>
            <button type="submit"
            style={{padding:8,
            borderRadius: 5,
            backgroundColor: "#0d6efd",
            color:'white',
            border: 'none',}}>
                Post</button>
        </form>
    )
}