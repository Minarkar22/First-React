
export default function Item ({item, remove}) {
    return (
      <>
        <li className='border-b-2 border-b-gray-200 p-[10px] flex flex-row justify-between'>
            <span>
                {item.content} -<b>{item.name}</b>
            </span>
            <button type="button" onClick={() => remove(item.id)} 
            className="border-2 border-gray-200 rounded-xl p-2">Delete</button>
        </li>
      </>
    );
  }