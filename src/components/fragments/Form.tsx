import React, { useState } from 'react';

interface FormProps {
    onAddItem: (item: { id: number; name: string; quantity: number; checked: boolean }) => void
}

export default function Form({ onAddItem }: FormProps) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name) return;

        const newItem = { name, quantity, checked: false, id: Date.now() }
        onAddItem(newItem)

        setName('')
        setQuantity(1)
    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
            {i + 1}
        </option>
    ))

    return (
        <form className="bg-[#dda15e] p-6 shadow-md flex justify-center gap-4" onSubmit={handleSubmit}>
            <h3 className="text-2xl text-center">Hari ini belanja apa kita?</h3>
            <div className="flex gap-4 justify-center">
                <select className="p-2 border rounded-lg" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}>
                    {quantityNum}
                </select>
                <input
                    type="text"
                    placeholder="nama barang..."
                    className="p-2 border rounded-lg flex-grow"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <button className="bg-[#283618] text-[#fefae0] font-bold py-2 px-4 rounded-lg">
                Tambah
            </button>
        </form>
    )
}
