
export default function Item ({ item, remove }) {
    return (
        <li>
            <span>
                {item.content} - <b>{item.name}</b>
            </span>

            <button type="button" onClick={() => remove(item.id)}>Delete</button>
        </li>
    );
}