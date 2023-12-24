export function descendingOrder(n: number): number {
	// แปลงตัวเลขเป็นอาร์เรย์ของตัวเลข (ทำไมต้องเเปลงเป็นสตริงทำให้ง่ายต่อการเข้าถึงและจัดการกับตัวเลขทีละหลัก )
	const digitsArray = Array.from(String(n), Number);

	// เรียงลำดับตัวเลขในลำดับจากมากไปน้อย
	const sort = digitsArray.sort((a, b) => b - a);

	// แปลงอาร์เรย์ที่เรียงลำดับกลับเป็นตัวเลข
	const result = parseInt(sort.join(""), 10);

	//เเสดงค่าออกมา
	return result;
}
