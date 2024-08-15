import Header from '../components/fragments/Header';
import Footer from '../components/fragments/Footer';
import Form from '../components/fragments/Form';
import GroceryList from '../components/fragments/GroceryList';
import { useState } from 'react';

export default function Home() {
    const [items, setItems] = useState<{ id: number; name: string; quantity: number; checked: boolean }[]>([
        { id: 1, name: 'Kopi Bubuk', quantity: 2, checked: true },
        { id: 2, name: 'Gula Pasir', quantity: 5, checked: false },
        { id: 3, name: 'Air Mineral', quantity: 3, checked: false },
    ])

    function handleAddItem(item: { id: number; name: string; quantity: number; checked: boolean }) {
        setItems([...items, item])
    }

    function handleDeleteItem(id: number) {
        setItems(items.filter(item => item.id !== id))
        // setItems((items) => items.filter((item) => item.id !== id))
    }

    function handleToggleitem(id: number) {
        setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item))
    }
    
    function handleClearItems() {
        setItems([])
    }

    return (
        <div className="container mx-auto p-4 h-screen flex flex-col">
            <Header />

            <Form onAddItem={handleAddItem}/>

            <GroceryList items={items} setItems={setItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleitem} onClearItems={handleClearItems}/>

            <Footer items={items}/>
        </div>
    )
}