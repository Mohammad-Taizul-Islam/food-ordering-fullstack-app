'use client';
import SectionHeaders from "../components/layout/SectionHeaders";
import MenuItem from "../components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('/api/categories');
        const categories = await categoriesResponse.json();
        setCategories(categories);

        const menuItemsResponse = await fetch('/api/menu-items');
        const menuItems = await menuItemsResponse.json();
        setMenuItems(menuItems);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., display error message to user)
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mt-8">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
            {menuItems.filter(item => item.category === c._id).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}