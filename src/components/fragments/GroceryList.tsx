import { useState } from "react";
import GroceryItem from "./GroceryItem";

interface GroceryItemType {
    id: number
    name: string
    quantity: number
    checked: boolean
}

interface GroceryListProps {
    items: GroceryItemType[]
    setItems: React.Dispatch<React.SetStateAction<GroceryItemType[]>>
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
    onClearItems: () => void
}

const GroceryList: React.FC<GroceryListProps> = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {

    const [sortBy, setSortBy] = useState('input')
    let sortedItems = [...items]

    // if (sortBy === 'input') {
    //     sortedItems = items
    // }

    // if (sortBy === 'name') {
    //     sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    // }

    // if (sortBy === 'checked') {
    //     sortedItems = items.slice().sort((a, b) => Number(a.checked) - Number(b.checked))
    // }

    switch (sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
            break;
        case 'checked':
            sortedItems = items.slice().sort((a, b) => Number(a.checked) - Number(b.checked))
            break;
        default:
            sortedItems = items
            break;
    }

    return (
        <>
            <div className="flex-grow bg-[url('img/paper-bg.jpg')] bg-cover bg-no-repeat shadow-md p-4 overflow-y-auto">
                <ul className="space-y-4">
                    {sortedItems.map(item => (
                        <GroceryItem key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                    ))}
                </ul>
            </div>

            <div className="bg-[#606c38] p-4 shadow-md text-center">
                <select className="p-2 border rounded-lg mx-2" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button className="bg-[#283618] text-[#fefae0] font-bold py-2 px-6 rounded-lg" onClick={() => onClearItems()}>
                    Bersihkan Daftar
                </button>
            </div>
        </>
    )
}

export default GroceryList
