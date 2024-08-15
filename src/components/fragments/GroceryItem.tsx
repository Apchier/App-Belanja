import { FaXmark } from "react-icons/fa6";

interface GroceryItemType {
    id: number
    name: string
    quantity: number
    checked: boolean
}

interface GroceryItemProps {
    item: GroceryItemType
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
}

const GroceryItem: React.FC<GroceryItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
    return (
        <li
            key={item.id}
            className="text-[#283618] text-2xl font-bold flex items-center justify-between bg-white p-4  shadow"
        >
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-6 h-6 accent-[#283618] mr-4"
                    checked={item.checked}
                    onChange={() => onToggleItem(item.id)}
                />
                <span
                    className={item.checked ? 'line-through' : ''}
                >
                    {item.quantity} {item.name}
                </span>
            </div>
            <button className="text-red-500 text-2xl font-bold" onClick={() => onDeleteItem(item.id)}>
                <FaXmark />
            </button>
        </li>
    )
}

export default GroceryItem