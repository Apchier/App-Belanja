export default function Footer({items}: { items: { id: number; name: string; quantity: number; checked: boolean }[] }) {

    if (items.length === 0) {
        return (
            <footer className="bg-[#bc6c25] text-white text-center py-4 shadow-md">Daftar belanja masih kosong!</footer>
        )
    }

    const totalItems = items.length
    const totalCheckedItems = items.filter(item => item.checked).length
    const percentage = Math.round((totalCheckedItems / totalItems) * 100)

    return (
        <footer className="bg-[#bc6c25] text-white text-center py-4 shadow-md">
            Ada {totalItems} barang di daftar belanjaan, {totalCheckedItems} barang sudah dibeli ({percentage}%)
        </footer>
    )
}
