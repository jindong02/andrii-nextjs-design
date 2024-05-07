import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/lib/baseURL";

interface FilterInterface {
	selectedCategory: string;
	handleCategorySelect: any;
}

const Filter = ({
	selectedCategory,
	handleCategorySelect
}: FilterInterface) => {
	const [categories, setCategories] = useState([{ _id: "0", label: "ALL" }]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(`${baseURL}/categories/all`);
			setCategories([...categories, ...data]);
		}
		fetchData();
	}, []);

	return (
		<div className="flex items-center my-5">
			{categories.map((category, index) => (
				<button
					key={index}
					className={`mx-1 font-semibold py-2 px-4 rounded-lg ${
						category._id === selectedCategory
							? "bg-pink"
							: "bg-lightGray"
					}`}
					onClick={() => handleCategorySelect(category)}
					style={{ marginRight: "5px", marginBottom: "5px" }}
				>
					{category.label}
				</button>
			))}
		</div>
	);
};

export default Filter;
